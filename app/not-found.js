'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4">
            <div className="relative w-full max-w-[500px] h-[400px] mb-8">
                <Image
                    src="/assets/images/404.png"
                    alt="404 Not Found"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                />
            </div>

            <h1 className="text-4xl font-bold mb-3">Page Not Found</h1>
            <p className="mb-6 text-lg text-gray-300">Sorry, the page you’re looking for doesn’t exist.</p>

            <Link
                href="/"
                className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}
