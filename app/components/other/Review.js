"use client";

import { QuickContext } from "@/app/context/QuickContext";
import { useContext, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar, FaUserCircle } from "react-icons/fa";

export default function Review() {
  const { reviews } = useContext(QuickContext);
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (count) => (
    <div className="flex justify-center text-yellow-400">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          className={`text-xl ${i < count ? "opacity-100" : "opacity-30"}`}
        />
      ))}
    </div>
  );

  const renderProfile = (img) =>
    img ? (
      <img
        src={img}
        alt="Reviewer"
        className="w-14 h-14 rounded-full object-cover border border-gray-400"
      />
    ) : (
      <FaUserCircle className="text-gray-500 w-14 h-14" />
    );

  const prevIndex = (index - 1 + reviews.length) % reviews.length;
  const nextIndex = (index + 1) % reviews.length;

  return (
    <div className="min-h-screen flex flex-col items-center bg-black md:px-20 py-20 text-white">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-12 text-sky-400 text-center">
        Student Reviews
      </h2>

      {/* Review Slider */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* Previous User */}
        <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-700 rounded-lg flex flex-col items-center justify-center shadow-inner">
          {renderProfile(reviews[prevIndex].image)}
          <span className="mt-1 text-xs text-gray-400">{reviews[prevIndex].name}</span>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="text-3xl text-white hover:text-sky-400 transition"
        >
          <FaArrowLeft />
        </button>

        {/* Center Review Card */}
        <div className="w-full max-w-lg bg-gray-800 backdrop-blur-md text-white p-6 rounded-xl shadow-xl text-center space-y-5 border border-gray-800">
          <div className="flex justify-center">{renderProfile(reviews[index].image)}</div>
          <p className="text-xl italic font-medium">"{reviews[index].content}"</p>
          <h4 className="text-lg font-bold">{reviews[index].name}</h4>
          {renderStars(reviews[index].rating)}
          <p className="text-gray-300">{reviews[index].description}</p>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="text-3xl text-white hover:text-sky-400 transition"
        >
          <FaArrowRight />
        </button>

        {/* Next User */}
        <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-700 rounded-lg flex flex-col items-center justify-center shadow-inner">
          {renderProfile(reviews[nextIndex].image)}
          <span className="mt-1 text-xs text-gray-400">{reviews[nextIndex].name}</span>
        </div>
      </div>
    </div>
  );
}
