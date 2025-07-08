import React from "react";

const OurProcessScreen = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-10 text-yellow-400 hover:text-white transition duration-300">
          🚀 Our Development Process
        </h1>

        {/* Intro */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg mb-12 hover:scale-[1.01] transition-transform">
          <p className="text-lg leading-relaxed text-gray-300">
            <span className="font-semibold text-white">
              "Space News and Photos"
            </span>{" "}
            is a dynamic web application built using modern web technologies
            like <span className="text-yellow-300">React.js</span>,{" "}
            <span className="text-yellow-300">Tailwind CSS</span>,{" "}
            <span className="text-yellow-300">Vite</span>,{" "}
            <span className="text-yellow-300">Node.js</span>,{" "}
            <span className="text-yellow-300">React Router DOM</span>, and{" "}
            <span className="text-yellow-300">Git</span>. The application
            fetches real-time data from the official{" "}
            <span className="text-blue-400">NASA API</span> and provides users
            with the latest space news, stunning photos, and event updates in an
            interactive and beautiful interface.
          </p>
        </div>

        {/* Steps / Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Step 1 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow hover:bg-gray-700 transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              📁 Project Setup
            </h3>
            <p className="text-gray-300">
              Initialized using <span className="text-white">Vite + React</span>{" "}
              for fast development. Tailwind CSS and React Router DOM were
              configured for styling and routing respectively. Version control
              was set up via Git and hosted on Vercel.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow hover:bg-gray-700 transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              🏠 Home Screen
            </h3>
            <p className="text-gray-300">
              Displays a responsive carousel with latest NASA APOD images and
              descriptions. Below it, a dynamic card section shows NASA’s tech
              transfer event data with a “Read More” option.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow hover:bg-gray-700 transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              🌌 Space News Screen
            </h3>
            <p className="text-gray-300">
              Allows users to search for specific space news and apply date
              filters. Results are paginated and shown in a modal with full
              details. Includes a scrollable modal and loader component for
              smooth user experience.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow hover:bg-gray-700 transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              🔄 API Integration
            </h3>
            <p className="text-gray-300">
              Integrated with{" "}
              <span className="text-blue-400">https://api.nasa.gov/</span> using
              simple JavaScript{" "}
              <code className="bg-gray-600 px-1 py-[1px] rounded text-white">
                fetch
              </code>{" "}
              calls. Data is filtered and structured to show only media_type =
              "image" when required.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow hover:bg-gray-700 transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              ⌛ Loading & Modal UX
            </h3>
            <p className="text-gray-300">
              Implemented a full-screen loader for smooth data fetching
              experience. Headless UI's
              <span className="text-white"> Dialog component</span> is used for
              displaying full content in a scrollable and elegant modal.
            </p>
          </div>

          {/* Step 6 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow hover:bg-gray-700 transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              🌐 Deployment & Hosting
            </h3>
            <p className="text-gray-300">
              Final app was pushed to GitHub and deployed on{" "}
              <span className="text-green-400">Vercel</span> with continuous
              deployment enabled. Fully responsive design ensures optimal
              experience across all devices.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 text-gray-400 text-sm">
          <p>
            This is a student project built to explore real-time API
            integration, React components, and UI/UX design using Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProcessScreen;
