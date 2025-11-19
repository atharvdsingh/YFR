import React from "react";

export default function Contact() {
  return (
    <section className="pt-24 pb-16 px-6 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-600 mb-8 text-center">Contact Us</h1>
        <form className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border rounded-md px-4 py-2 bg-transparent" />
          <input type="email" placeholder="Your Email" className="w-full border rounded-md px-4 py-2 bg-transparent" />
          <textarea placeholder="Your Message" className="w-full border rounded-md px-4 py-2 h-32 bg-transparent"></textarea>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">Send Message</button>
        </form>
      </div>
    </section>
  );
}
