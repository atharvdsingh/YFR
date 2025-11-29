import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ _id, title, description, coverImage, audioUrl }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Play error:", e));
    }

    setPlaying(!playing);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden max-w-sm w-full">

      {/* COVER IMAGE */}
      <div className="relative">
        <img 
          src={coverImage} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
      </div>

      {/* BODY */}
      <div className="p-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>

        {/* AUDIO PLAYER */}
        <div className="mt-4">
          <audio
            ref={audioRef}
            src={audioUrl}
            controls
            className="w-full h-10"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={(e) => console.error("Audio error:", e)}
          />
        </div>

        {/* BUTTONS */}
        <div className="mt-4 flex justify-between items-center">
          <button 
            onClick={togglePlay}
            className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700"
          >
            {playing ? "Pause" : "Listen Now"}
          </button>

          <button
            onClick={() => navigate(`/category/${_id}`)}
            className="border border-indigo-600 text-indigo-600 px-3 py-1 rounded-md text-sm hover:bg-indigo-600 hover:text-white"
          >
            View Details
          </button>
        </div>

      </div>
    </div>
  );
}
