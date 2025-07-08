import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { useEffect, useState } from "react";

import { Carousel } from "react-responsive-carousel";
import Loader from "../components/Loader"; // ✅ adjust the path as needed

const API_KEY = "i4Dg4tdSSQYIlNs6XFdqDh91AAHqPvycZTKh5wsm";

const HomeScreen = () => {
  const [apodData, setApodData] = useState([]);
  const [events, setEvents] = useState([]);
  const [loadingAPOD, setLoadingAPOD] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`)
      .then((res) => res.json())
      .then((data) => {
        const imagesOnly = data.filter((item) => item.media_type === "image");
        setApodData(imagesOnly);
        setLoadingAPOD(false);
      })
      .catch((err) => {
        console.error("APOD fetch error:", err);
        setLoadingAPOD(false);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.nasa.gov/techtransfer/patent/?engine&api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data?.results?.slice(0, 6) || []);
        setLoadingEvents(false);
      })
      .catch((err) => {
        console.error("Events fetch error:", err);
        setLoadingEvents(false);
      });
  }, []);

  const isLoading = loadingAPOD || loadingEvents;

  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* Fullscreen Loader */}
      {isLoading && <Loader />}

      {/* Main Content */}
      {!isLoading && (
        <>
          {/* Carousel Section */}
          <section className="px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">
              🌌 Latest Space News
            </h2>
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={true}
              swipeable
              interval={5000}>
              {apodData.map((item, index) => (
                <div key={index} className="flex flex-col items-center p-4">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="rounded-xl max-h-[500px] w-full object-cover"
                  />
                  <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
                  <p className="text-sm mt-2 px-4 max-w-4xl text-gray-300 text-center">
                    {item.explanation?.length > 300
                      ? item.explanation.substring(0, 300) + "..."
                      : item.explanation}
                  </p>
                </div>
              ))}
            </Carousel>
          </section>

          {/* Events Section */}
          <section className="px-6 py-12 bg-gray-900">
            <h2 className="text-3xl font-bold mb-8 text-center">
              🚀 Top NASA Events
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-gray-800 hover:scale-105 transition-transform duration-300 p-4 rounded-xl shadow-md flex flex-col">
                  {event[10] ? (
                    <img
                      src={event[10]}
                      alt="Event"
                      className="rounded-lg mb-4 h-40 w-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-700 h-40 w-full rounded-lg mb-4 flex items-center justify-center text-gray-400">
                      No Image Available
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{event[1]}</h3>
                  <p className="text-gray-300 text-sm flex-grow">
                    {event[3]?.length > 100
                      ? event[3].substring(0, 100) + "..."
                      : event[3]}
                  </p>
                  {event[9] && (
                    <a
                      href={event[9]}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block text-center bg-yellow-300 hover:bg-yellow-500 px-4 py-2 rounded-lg transition-all duration-300">
                      Read More
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
