
import React from "react";

const ContactPage: React.FC = () => {
  return (

    <div className="bg-white min-h-screen">
    {/* Header */}
    <header className="bg-[#F6F5FF] py-14">
      <div className="container mx-auto px-4 xl:pl-32">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-900">FAQ</h1>
        <p className="text-xs sm:text-sm text-gray-500 ">
          Home / Pages / <span className="text-pink-500">Faq</span>
        </p>
      </div>
    </header>


    <section className="py-16 px-44 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* General Information Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#151875] mb-6">
              General Information
            </h2>
            <ul className="space-y-6">
              {[
                {
                  title: "Eu dictumst cum at sed euismod condimentum?",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique mollis vitae, consequat gravida sagittis.",
                },
                {
                  title: "Magna bibendum est fermentum eros.",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique mollis vitae, consequat gravida sagittis.",
                },
                {
                  title: "Odio muskana hak eris conseekin scelerisque?",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique mollis vitae, consequat gravida sagittis.",
                },
                {
                  title: "Elit id blandit sabara boi velit gua mara?",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed tristique mollis vitae, consequat gravida sagittis.",
                },
              ].map((item, index) => (
                <li key={index}>
                  <h3 className="text-lg font-semibold text-[#151875]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Ask a Question Form */}
          <div className="bg-[#f3f4fd] p-22 shadow-md">
            <h2 className="text-2xl font-bold text-[#151875] mb-6">
              Ask a Question
            </h2>
            <form className="space-y-10 ">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border-gray-300 roundedshadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  placeholder="Enter the subject"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type Your Message*
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  placeholder="Type your message"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-40 py-3 px-4 bg-pink-500 text-white font-medium shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Send Mail
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </section>
    </div>
    
  );
};

export default ContactPage;
