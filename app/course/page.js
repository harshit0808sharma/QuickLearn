'use client';

import { useState } from 'react';
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { CoursesData } from "@/public/assets/data";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiMic } from 'react-icons/fi';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import Header from '../components/other/Header';

const categories = ["all", "front-end", "back-end", "database", "tools"];

const CoursePage = () => {
  const [query, setQuery] = useState('');
  const [show, setShow] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter logic
  const filteredCourses = CoursesData.filter((item) => {
    const matchCategory = activeCategory === "all" || item.category === activeCategory;
    const matchQuery = item.courseName.toLowerCase().includes(query.toLowerCase());
    return matchCategory && matchQuery;
  });

  const visibleItems = show ? filteredCourses : filteredCourses.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white scroll-mt-24" id='html-course'>
      <Navbar />

      {/* Header */}
      <Header pageName={"Course"} pageAbout={""} />

      {/* Filters */}
      <div className="flex flex-col items-center gap-6 px-6 py-10">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border transition font-medium
                ${activeCategory === cat
                  ? 'bg-sky-600 text-white border-sky-600'
                  : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-sky-700 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex items-center border border-gray-700 rounded-2xl px-4 py-2 shadow-sm w-full max-w-md bg-gray-800">
          <FiSearch className="text-gray-400 mr-2 text-xl" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by course name..."
            className="flex-grow outline-none text-white placeholder-gray-400 bg-transparent"
          />
          <button onClick={() => alert('Voice search coming soon!')}>
            <FiMic className="text-gray-400 ml-2 text-xl hover:text-blue-500 transition duration-200" />
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto mb-12">
        {visibleItems.length > 0 ? (
          visibleItems.map((item) => (
            <Link
              href={`/course/${item.courseName.toLowerCase().replace(/\s+/g, '')}`}
              key={item.id}
              className="bg-gray-900 hover:shadow-2xl shadow-lg rounded-2xl transition-all duration-300 p-6 flex flex-col gap-4 border border-gray-800"
            >
              {/* Course Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src={item.image}
                    alt={item.courseName}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 60px"
                    priority
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">{item.courseName}</h3>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    <FaStar /> <span>{item.review}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm">{item.description}</p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300 mt-2">
                {Object.values(item.features).map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-400 text-sm" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Questions */}
              <div className="mt-2 text-xs text-right text-gray-500">
                {item.questions} Questions
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No courses found.</p>
        )}
      </div>

      {/* Show More */}
      {filteredCourses.length > 6 && (
        <div className="text-center mb-16">
          <button
            onClick={() => setShow(!show)}
            className="px-6 py-3 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition"
          >
            {show ? "View Less" : "View All"}
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CoursePage;
