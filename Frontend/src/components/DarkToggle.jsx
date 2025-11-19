// src/components/DarkToggle.jsx
import React from "react";
import useDarkMode from "../hooks/useDarkMode";

export default function DarkToggle() {
  const [dark, setDark] = useDarkMode();
  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-1 rounded-md border bg-white/5 hover:bg-white/10 text-sm"
      aria-label="Toggle dark mode"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
