'use client';

import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { CommingSoon } from "./CommingSoon";
import { QuickContext } from "@/app/context/QuickContext";
import Footer from "@/app/components/layout/Footer";
import Navbar from "@/app/components/layout/Navbar";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Header from "./Header";

export const Question = ({ unwrappedParams }) => {
  const { course, qId } = unwrappedParams;
  const [currentId, setCurrentId] = useState(Number(qId));
  const [qData, setQData] = useState(null);
  const [questionsData, setQuestionsData] = useState([]);
  const { htmlData, cssData } = useContext(QuickContext);

useEffect(() => {
  let data = [];
  if (course === "html") {
    data = htmlData;
  } else if (course === "css") {
    data = cssData;
  }

  setQuestionsData(data);

  const questionData = data.find((item) => Number(item.qId) === currentId);
  setQData(questionData);
}, [currentId, course, htmlData, cssData]);


  const handlePrev = () => {
    setCurrentId((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentId((prev) =>
      prev < questionsData.length ? prev + 1 : prev
    );
  };

  if (!qData) return <CommingSoon />;

  return (
    <>
      <div className="min-h-screen w-full flex flex-col bg-gray-900 text-white">
        <Navbar />
        <div className="flex-grow w-full px-6 md:px-16 py-20 space-y-10">
          {/* Course Title */}
          <p className="text-center text-4xl md:text-5xl font-bold text-sky-500 uppercase">
            <Link href={`/course/${unwrappedParams?.course}`}>
              {unwrappedParams?.course}
            </Link>
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrev}
              className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 transition px-6 py-2 rounded-full font-medium"
            >
              <FaArrowLeft />
              Previous
            </button>
            <button
              onClick={handleNext}
              className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 transition px-6 py-2 rounded-full font-medium"
            >
              Next
              <FaArrowRight />
            </button>
          </div>

          {/* Question Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            {/* Textual Info */}
            <div className="flex-1 space-y-5">
              <h2 className="text-2xl font-bold">{currentId}. {qData?.question}</h2>
              <h3 className="text-lg font-semibold text-green-400">{qData?.answer}</h3>
              <ul className="list-disc pl-6 space-y-2">
                {qData?.points?.a && <li><code className="bg-gray-700 px-2 py-1 rounded">{qData.points.a}</code></li>}
                {qData?.points?.b && <li><code className="bg-gray-700 px-2 py-1 rounded">{qData.points.b}</code></li>}
                {qData?.points?.c && <li><code className="bg-gray-700 px-2 py-1 rounded">{qData.points.c}</code></li>}
                {qData?.points?.d && <li><code className="bg-gray-700 px-2 py-1 rounded">{qData.points.d}</code></li>}
                {qData?.points?.e && <li><code className="bg-gray-700 px-2 py-1 rounded">{qData.points.e}</code></li>}
              </ul>
            </div>

            {/* Image */}
            {qData?.img?.src && (
              <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                  src={qData.img.src}
                  alt="question related"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-md object-contain w-full max-w-md"
                  priority
                />
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};


