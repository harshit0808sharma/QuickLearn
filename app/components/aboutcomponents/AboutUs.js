'use client'
import Image from "next/image";
import { FaChalkboardTeacher, FaLaptopCode, FaInfinity, FaBookOpen } from "react-icons/fa";
import aboutImage from '../../../public/assets/images/boy5.png';



const AboutUs = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-gray-800 p-6 rounded-2xl mt-10">
                {/* Left: Image */}
                <div className="w-full lg:w-1/2 bg-gray-700 rounded-2xl">
                    <Image
                        src={aboutImage}
                        alt="Our Instructors"
                        width={600}
                        height={400}
                        priority
                        style={{ width: "auto"}}
                        className="rounded-2xl w-full"
                    />

                </div>

                {/* Right: Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-400">About Us</h2>
                    <h3 className="text-2xl font-semibold text-white">
                        We have the best instructors to provide the best course
                    </h3>
                    <p className="text-gray-300 text-base">
                        Our instructors come with years of real-world experience and deep subject expertise. We provide engaging courses that are designed to help you learn practically and interactively.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div className="flex items-center gap-3">
                            <FaChalkboardTeacher className="text-green-400 text-2xl" />
                            <span>Online Training</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaLaptopCode className="text-green-400 text-2xl" />
                            <span>5+ Courses</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaInfinity className="text-green-400 text-2xl" />
                            <span>Lifetime Access</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaBookOpen className="text-green-400 text-2xl" />
                            <span>Active Learning</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;