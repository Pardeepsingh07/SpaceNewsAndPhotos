import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="w-16 h-16 border-4 border-white border-dashed rounded-full animate-spin"></div>
      <p className="text-white ml-4 text-lg font-semibold">Loading...</p>
    </div>
  );
};

export default Loader;
