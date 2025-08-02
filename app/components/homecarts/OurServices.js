'use client';

import { FaAccessibleIcon, FaQuestionCircle } from "react-icons/fa";
import { AiOutlineBook, AiOutlineSafetyCertificate } from "react-icons/ai";

export const OurServices = () => {
  const services = [
    {
      icon: <AiOutlineBook className="text-green-400 text-5xl" />,
      count: "5",
      highlight: "+",
      label: "Courses",
      color: "text-green-400",
    },
    {
      icon: <FaQuestionCircle className="text-red-400 text-5xl" />,
      count: "500",
      highlight: "+",
      label: "Questions",
      color: "text-red-400",
    },
    {
      icon: <AiOutlineSafetyCertificate className="text-yellow-400 text-5xl" />,
      count: "50",
      highlight: "+",
      label: "Certified",
      color: "text-yellow-400",
    },
    {
      icon: <FaAccessibleIcon className="text-pink-400 text-5xl" />,
      count: "100",
      highlight: "%",
      label: "Free Accessible",
      color: "text-pink-400",
    },
  ];

  return (
    <div className="w-full bg-gray-900 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-5 bg-gray-800 hover:bg-gray-700 transition p-5 rounded-xl shadow-lg"
          >
            <div className="w-20 h-20 flex justify-center items-center bg-gray-100 rounded-full">
              {service.icon}
            </div>
            <div className="flex flex-col gap-1 text-white">
              <h2 className="font-bold text-4xl">
                {service.count}{" "}
                <span className={`${service.color}`}>{service.highlight}</span>
              </h2>
              <p className="text-gray-300 text-lg">{service.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
