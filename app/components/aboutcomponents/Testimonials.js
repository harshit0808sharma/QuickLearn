'use client'
import Image from "next/image";
import { useContext } from "react";
import { QuickContext } from "@/app/context/QuickContext";


const Testimonials = () => {
    const {TestimonialsData} = useContext(QuickContext);
    return (
        <>
            <div className="text-center space-y-8 bg-gray-900 p-6 rounded-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-sky-400">Testimonials</h2>
                <h3 className="text-2xl font-semibold">What did our students say about us?</h3>
                <p className="text-gray-300 max-w-3xl mx-auto text-base">
                    Hear directly from the students who experienced our interactive learning environment and gained valuable skills for their careers.
                </p>

                {/* Testimonials Grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TestimonialsData.map((student, index) => (
                        <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg text-left space-y-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src={student.img}
                                    alt={student.name}
                                    className="w-14 h-14 rounded-full object-cover border border-white"
                                    priority
                                />
                                <div>
                                    <h4 className="text-lg font-semibold">{student.name}</h4>
                                    <p className="text-sm text-gray-400">{student.profession}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm">{student.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Testimonials;