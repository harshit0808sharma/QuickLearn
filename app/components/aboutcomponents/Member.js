'use client';

import Image from 'next/image';
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaLaptopCode, FaBookOpen, FaLinkedin } from 'react-icons/fa';
import { useContext } from 'react';
import { QuickContext } from '@/app/context/QuickContext';
import Link from 'next/link';

export default function ProfilePage({ unwrappedParams }) {
    const { TeamData, CoursesData, artworkData } = useContext(QuickContext);

    const filterMember = TeamData.find(
        (member) => member.name.toLowerCase().replace(/\s+/g, '') === unwrappedParams.name
    );

    const filterCourse = CoursesData.filter((course) =>
        filterMember?.courses?.includes(course.courseName.toLowerCase().replace(/\s+/g, ''))
    );

    const filterVideo = artworkData.filter((art) => art.creator === unwrappedParams.name);

    // Early return if no member
    if (!filterMember) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <p className="text-lg">No team member found with this name.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4 py-10">
            
            {/* Profile Card */}
            <div className="max-w-6xl mx-auto bg-gray-800 rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start p-8 gap-8">
                {/* Image */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                    <Image
                        src={filterMember.image}
                        alt={filterMember.name || 'Team Member'}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Details */}
                <div className="flex-1 space-y-3">
                    <h1 className="text-4xl font-bold">{filterMember.name}</h1>
                    <p className="text-lg text-purple-300">🚀 {filterMember.role}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300 mt-4">
                        <p><FaUserAlt className="inline mr-2 text-white" /> Age: {filterMember.age}</p>
                        <p><FaEnvelope className="inline mr-2 text-white" /> {filterMember.contact?.email}</p>
                        <p><FaPhoneAlt className="inline mr-2 text-white" /> {filterMember.contact?.phone}</p>
                        <p><FaLinkedin className="inline mr-2 text-white" /> {filterMember.contact?.linkedin}</p>
                        <p><FaBookOpen className="inline mr-2 text-white" /> Courses Created: {filterMember.totalCourses}</p>
                        <p>
                            <FaLaptopCode className="inline mr-2 text-white" />
                            Services: {filterMember.services?.map((item, index) => (
                                <span key={index}>{item}{index < filterMember.services.length - 1 ? ', ' : ''}</span>
                            ))}
                        </p>
                        <p>Location: {filterMember.location}</p>
                    </div>

                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                        {filterMember.about}
                    </p>
                </div>
            </div>

            {/* Courses or Videos Grid */}
            <div className="mt-12 max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">My Courses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filterCourse.length > 0 ? (
                        filterCourse.map((course, index) => (
                            <Link href={`/course/${course.courseName.toLowerCase().replace(/\s+/g, '')}`} key={index}>
                                <div className="bg-gray-800 rounded-xl shadow-md p-4 hover:shadow-2xl transition duration-300">
                                    <div className="relative w-full h-40 mb-4 rounded overflow-hidden bg-gray-700">
                                        {course.image ? (
                                            <Image
                                                src={typeof course.image === 'string' ? course.image : course.image.src}
                                                alt={course.courseName}
                                                fill
                                                className="object-contain p-2"
                                                sizes="(max-width: 768px) 100vw, 300px"
                                                priority
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center w-full h-full text-4xl text-white">
                                                <FaBookOpen />
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">{course.courseName}</h3>
                                </div>
                            </Link>
                        ))
                    ) : (
                        filterVideo.map((video, index) => (
                            <Link href={`/about/${video.creator}/${video.id}`} key={index}>
                                <div className="bg-gray-800 rounded-xl shadow-md p-4 hover:shadow-2xl transition duration-300">
                                    <div className="relative w-full h-40 mb-4 rounded overflow-hidden bg-gray-700">
                                        {video.image ? (
                                            <Image
                                                src={typeof video.image === 'string' ? video.image : video.image.src}
                                                alt={video.title}
                                                fill
                                                className="object-contain p-2"
                                                sizes="(max-width: 768px) 100vw, 300px"
                                                priority
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center w-full h-full text-4xl text-white">
                                                <FaBookOpen />
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
