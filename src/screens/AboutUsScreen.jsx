import React from "react";

const teamMembers = [
  {
    name: "Jashanpreet Kaur",
    className: "MCA",
    rollNumber: "2323993",
    branch: "Computer Applications",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Pardeep Singh",
    className: "MCA",
    rollNumber: "2324004",
    branch: "Computer Applications",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Paramveer Kaur",
    className: "MCA",
    rollNumber: "2324003",
    branch: "Computer Applications",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Mehak",
    className: "MCA",
    rollNumber: "2324001",
    branch: "Computer Applications",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
];

const AboutUsScreen = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10 hover:text-white transition duration-300">
          📡 About Our Project
        </h1>

        {/* Project Overview */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg mb-12 hover:scale-[1.01] transition-transform">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">
            Space News and Photos App
          </h2>
          <p className="text-gray-300 leading-relaxed">
            This project is a final-year MCA academic application developed to
            provide users with real-time updates on space-related topics. Using
            the <span className="text-blue-400">NASA Open API</span>, it
            delivers stunning space photos, breaking space news, and upcoming
            NASA events in a beautifully styled React interface.
            <br />
            <br />
            Our goal was to combine clean UI/UX with real-world data integration
            using modern technologies like{" "}
            <span className="text-yellow-300">React.js</span>,{" "}
            <span className="text-yellow-300">Tailwind CSS</span>,{" "}
            <span className="text-yellow-300">Vite</span>, and{" "}
            <span className="text-yellow-300">Node.js</span>. The entire
            application was version-controlled with{" "}
            <span className="text-green-400">Git</span> and deployed on{" "}
            <span className="text-green-400">Vercel</span>.
          </p>
        </div>

        {/* Our Team */}
        <h2 className="text-3xl font-semibold text-center text-yellow-400 mb-6">
          👨‍🚀 Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 p-5 rounded-xl text-center hover:bg-gray-700 transition-all duration-300 shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-yellow-400"
              />
              <h3 className="text-xl font-bold text-yellow-300">
                {member.name}
              </h3>
              <p className="text-gray-400">{member.className}</p>
              <p className="text-gray-400">{member.branch}</p>
              <p className="text-gray-400">Roll No. {member.rollNumber}</p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 text-gray-400 text-sm">
          <p>MCA Final Year Project - Department of Computer Applications.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
