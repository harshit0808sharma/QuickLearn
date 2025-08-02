'use client';

import Image from 'next/image';
import React, { useContext } from 'react';
import logo from '../../../public/assets/images/QuickLearnlogo.png';
import Link from 'next/link';
import { FaClock, FaSignal, FaPlayCircle, FaVideoSlash } from 'react-icons/fa';
import { QuickContext } from '@/app/context/QuickContext';

export default function VideoCard({ unwrappedParams }) {
    const { artworkData, TeamData } = useContext(QuickContext);
    const filterVideo = artworkData.find((item) => Number(item.id) === Number(unwrappedParams.vId) && item.creator === unwrappedParams.name);
    const filterMember = TeamData.find((member) => member.name.toLowerCase().replace(/\s+/g, '') === unwrappedParams.name)

    return (
        <div className="min-h-screen w-full bg-black px-4 py-8 flex flex-col items-center">
            {/* Top Logo */}
            <Link href="/">
                <Image
                    src={logo}
                    alt="QuickLearn Logo"
                    width={160}
                    height={40}
                    className="mb-6 object-contain"
                    priority
                />
            </Link>

            {/* Card */}
            <div className="max-w-7xl w-full bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col lg:flex-row gap-10 text-white">

                {/* Video or Fallback */}
                <div className="w-full lg:w-2/3 aspect-video rounded-xl overflow-hidden border-2 hover:border-sky-600 shadow-md flex justify-center items-center bg-black">
                    {filterVideo.videoUrl ? (
                        <iframe
                            className="w-full h-full"
                            src={filterVideo?.videoUrl}
                            title="Course Video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media; gyroscope"
                            allowFullScreen
                            loading="lazy"
                        />


                    ) : (
                        <div className="flex flex-col items-center text-center p-6 text-gray-400">
                            <FaVideoSlash className="text-5xl mb-4 text-red-500" />
                            <p className="text-lg">Video not available</p>
                            <p className="text-sm">Stay tuned, we will add it soon.</p>
                        </div>
                    )}
                </div>

                {/* Info Section */}
                <div className="w-full lg:w-1/3 flex flex-col justify-between gap-6">
                    <div className="space-y-3">
                        <span className="text-sm font-semibold uppercase tracking-wide text-sky-500">
                            Course Preview
                        </span>
                        <h2 className="text-3xl font-bold text-white">
                            {filterVideo?.title}
                        </h2>
                        <p className="text-gray-300 text-sm sm:text-base">
                            {filterVideo?.description}
                        </p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
                            <FaClock /> Duration: {filterVideo?.duration}
                        </span>
                        <span className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
                            <FaSignal /> Level: {filterVideo?.level}
                        </span>
                        <span className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
                            <FaPlayCircle /> {filterVideo?.category}
                        </span>
                        <span>
                            Materials Used: {filterVideo?.materials}
                        </span>
                    </div>

                    {/* Branding */}
                    <div className="flex items-center gap-3 mt-4">
                        <Image
                            src={filterMember?.image}
                            alt="QuickLearn"
                            width={60}
                            height={60}
                            className="bg-white p-2 rounded-lg shadow-sm"
                        />
                        <div className="text-sm">
                            <p className="font-semibold text-white">{filterMember?.name}</p>
                            <p className="text-gray-400">{filterMember?.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
