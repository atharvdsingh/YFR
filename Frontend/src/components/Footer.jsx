import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-indigo-400 font-bold text-xl">Your Friendly Researchers</h3>
          <p className="mt-3 text-sm">Candid research podcasts made by students and early-career researchers.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
            <li><Link to="/categories" className="hover:text-indigo-400">Categories</Link></li>
            <li><Link to="/about" className="hover:text-indigo-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p className="text-sm">📧 <a className="hover:text-indigo-400" href="mailto:yourfriendlyresearchefers1@gmail.com">yourfriendlyresearchefers1@gmail.com</a></p>
          <p className="text-sm mt-2">🌐 India</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:text-red-500"><FaYoutube/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-blue-500"><FaLinkedin/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-pink-500"><FaInstagram/></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-sky-400"><FaTwitter/></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Your Friendly Researchers. All rights reserved.
      </div>
    </footer>
  );
}
