import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Discover <span className="text-white">research podcasts</span> that inform & inspire
          </h1>
          <p className="mt-4 text-lg text-indigo-100 max-w-xl">
            Candid discussions, research-backed insights and community-driven topics — hosted by students and early researchers.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="/categories" className="inline-block px-6 py-3 bg-white text-indigo-700 rounded-lg font-medium hover:bg-indigo-50">Explore Podcasts</a>
            <a href="/about" className="inline-block px-6 py-3 border border-white/40 text-white rounded-lg hover:bg-white/10">About Us</a>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="/images/hero.png" alt="Hero" className="w-full max-w-md rounded-lg shadow-xl" />
        </div>
      </div>
    </section>
  );
}
