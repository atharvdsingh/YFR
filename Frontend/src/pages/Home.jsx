import React from "react";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";

const popular = [
  {
    title: "The Future of AI",
    description: "Explore AI trends, ethics, and real-world use-cases.",
    image: "/images/categories/tech.png",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "Mindful Living",
    description: "Conversations on wellness and mental health.",
    image: "/images/categories/health.png",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    title: "Education Today",
    description: "How learning is evolving across the world.",
    image: "/images/categories/education.png",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  }
];

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">Popular Podcasts</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {popular.map((p, idx) => <CategoryCard key={idx} {...p} />)}
        </div>
      </section>
    </div>
  );
}
