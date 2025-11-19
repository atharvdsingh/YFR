import React from "react";
import ReactPlayer from "react-player";

export default function CategoryCard({ title, description, image, audio }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden max-w-sm w-full">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>

        <div className="mt-4">
          <ReactPlayer url={audio} controls width="100%" height="60px" />
        </div>

        <div className="mt-4 flex justify-between items-center">
          <button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700">Listen Now</button>
          <button className="border border-indigo-600 text-indigo-600 px-3 py-1 rounded-md text-sm hover:bg-indigo-600 hover:text-white">View Details</button>
        </div>
      </div>
    </div>
  );
}
