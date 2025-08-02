'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/assets/images/boy3.png';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 py-10 bg-gray-800 text-white">
      {/* Left Section */}
      <div className="flex flex-col gap-6 max-w-xl">
        <p className="text-yellow-400 text-lg font-semibold tracking-wide">
          Educational Goal
        </p>

        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Learn Programming Skills Online!
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-md text-gray-100">
          Master the art of coding with our high-quality courses and interactive content to boost your career.
        </p>

        {/* Stats */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2 text-center font-semibold text-lg">
          <li className="bg-sky-800 rounded-xl py-3 shadow-md">2+ Categories</li>
          <li className="bg-sky-800 rounded-xl py-3 shadow-md">10+ Courses</li>
          <li className="bg-sky-800 rounded-xl py-3 shadow-md">500+ Questions</li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            href="/course"
            className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-lg font-medium text-center transition"
          >
            Explore Courses
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg text-lg font-medium text-center transition"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Right Section - BIGGER IMAGE */}
      <div className="relative w-full max-w-2xl aspect-[4/3]">
        <Image
          src={logo}
          alt="Hero Illustration"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
