import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { CoursesData } from "@/public/assets/data";

export default function OurCourses() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 px-6 md:px-20 py-16">

      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
        Our Courses
      </h2>
      <p className="text-gray-300 max-w-2xl text-center mb-12 text-lg">
        Dive into our hand-picked courses designed to boost your programming skills from beginner to pro.
      </p>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {CoursesData.slice(0, 6).map((item, index) => (
          <Link
            href={`/course/${item.courseName.toLowerCase().replace(/\s+/g, '')}`}
            key={index}
            className="bg-gray-800 hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden border border-gray-700 hover:border-sky-500"
          >
            <div className="p-6 flex flex-col h-full justify-between text-white">

              {/* Image & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-700 shadow-inner flex justify-center items-center">
                  <Image
                    src={item?.image}
                    alt={item.courseName}
                    width={64}
                    height={64}
                    className="object-contain"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-semibold text-sky-500 group-hover:text-sky-400 transition">
                  {item.courseName}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-600 mt-2 text-sm">
                <span className="text-gray-200 flex items-center gap-1">
                  <span className="font-bold">{item.questions}+</span> Questions
                </span>
                <span className="text-yellow-400 flex items-center gap-1">
                  <FaStar className="text-base" /> {item.review}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
