'use client';

import { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import logo from '../../../public/assets/images/QuickLearn.png';
import { FiBell, FiMail } from "react-icons/fi";

export const CommingSoon = () => {
    const [query, setQuery] = useState('');

    return (
        <div className="min-h-screen w-full bg-gray-900 flex flex-col">
            {/* Header */}
            <header className="p-6">
                <Link
                    href="/"
                    className="text-yellow-400 text-3xl font-extrabold tracking-wide hover:underline"
                >
                    Quick<span className="text-green-500">Learn</span>
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex flex-col lg:flex-row justify-between items-center gap-10 px-6 md:px-20 py-10 flex-grow">
                {/* Left: Text Content */}
                <section className="flex-1 space-y-8">
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
                        Coming Soon{" "}
                        <FiBell className="inline ml-2 text-yellow-400 animate-pulse" />
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                        We’re working hard to bring you something amazing. Stay tuned and be the first to know when we launch!
                    </p>

                    {/* Email Input */}
                    <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden max-w-md bg-white focus-within:ring-2 focus-within:ring-yellow-400">
                        <span className="bg-yellow-400 text-black px-4 py-3 flex items-center gap-2 font-medium">
                            <FiMail /> Notify Me
                        </span>
                        <input
                            type="email"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Enter your email address"
                            className="flex-grow p-3 outline-none text-gray-800 placeholder-gray-500 bg-transparent"
                        />
                    </div>
                </section>

                {/* Right: Illustration */}
                <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
                    <Image
                        src={logo}
                        alt="Coming Soon Illustration"
                        width={400}
                        height={400}
                        priority
                        className="object-contain max-w-sm w-full"
                    />
                </div>
            </main>
        </div>
    );
};
