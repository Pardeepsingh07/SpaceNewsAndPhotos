import React, { useEffect, useState } from "react";

import { Dialog } from "@headlessui/react";
import Loader from "../components/Loader"; // ✅ Adjust path if needed

const API_KEY = "i4Dg4tdSSQYIlNs6XFdqDh91AAHqPvycZTKh5wsm";

const SpaceNewsScreen = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalData, setModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [dateFilter, setDateFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 5;

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=20`)
      .then((res) => res.json())
      .then((data) => {
        const imagesOnly = data.filter((item) => item.media_type === "image");
        setNews(imagesOnly);
        setFilteredNews(imagesOnly);
        setLoading(false);
      })
      .catch((err) => {
        console.error("NASA news fetch error:", err);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    const results = news.filter((item) =>
      item.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNews(results);
    setCurrentPage(1);
  };

  const handleDateFilter = () => {
    if (!dateFilter) return;
    setLoading(true);
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${dateFilter}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.media_type === "image") {
          setFilteredNews([data]);
        } else {
          setFilteredNews([]);
        }
        setCurrentPage(1);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Date filter error:", err);
        setLoading(false);
      });
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  return (
    <div className="bg-black text-white min-h-screen px-4 py-10 relative">
      {loading && <Loader />}

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search NASA News by Title..."
          className="px-4 py-2 rounded-md text-white border border-white bg-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-300 hover:bg-yellow-500  text-black px-4 py-2 rounded-md transition">
          Search
        </button>

        <input
          type="date"
          className="px-4 py-2 rounded-md text-white border border-white bg-transparent"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
        <button
          onClick={handleDateFilter}
          className="bg-yellow-500 hover:bg-yellow-700 text-black px-4 py-2 rounded-md transition">
          Filter by Date
        </button>
      </div>

      {/* Modal */}
      <Dialog
        open={!!modalData}
        onClose={() => setModalData(null)}
        className="relative z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
          <Dialog.Panel className="bg-white text-black max-w-2xl w-full rounded-xl p-6 max-h-[90vh] overflow-y-auto">
            <Dialog.Title className="text-xl font-bold mb-2">
              {modalData?.title}
            </Dialog.Title>
            <img
              src={modalData?.url}
              alt={modalData?.title}
              className="rounded-lg mb-4 w-full max-h-[300px] object-cover"
            />
            <p className="text-justify whitespace-pre-line">
              {modalData?.explanation}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800"
              onClick={() => setModalData(null)}>
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* News List */}
      {filteredNews.length === 0 && !loading ? (
        <p className="text-center text-red-400">No results found.</p>
      ) : (
        <div className="grid gap-6">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition duration-300 shadow-md">
              <div className="flex flex-col md:flex-row gap-4">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full md:w-48 h-48 object-cover rounded-lg"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.date}</p>
                  <p className="text-gray-300 mt-2">
                    {item.explanation.length > 150
                      ? item.explanation.substring(0, 150) + "..."
                      : item.explanation}
                  </p>
                  <button
                    onClick={() => setModalData(item)}
                    className="mt-3 self-start bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded transition">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              } transition`}>
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpaceNewsScreen;
