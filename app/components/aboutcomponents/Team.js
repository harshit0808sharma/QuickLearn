'use client'
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { QuickContext } from "@/app/context/QuickContext";


const Team = () => {
    const { TeamData } = useContext(QuickContext);
    return (
        <>
            <div className="text-center space-y-8 bg-gray-800 p-10 rounded-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-400">Meet Our Team</h2>
                <p className="text-gray-300 max-w-2xl mx-auto text-base">
                    Our team of professionals is passionate about education and committed to your success.
                </p>

                {/* Team Grid */}
                <div className="mt-10 flex flex-wrap justify-center gap-12">
                    {TeamData.map((member, idx) => (
                        <Link href={`/about/${member?.name.toLowerCase().replace(/\s+/g, '')}`} key={idx} className="flex flex-col items-center space-y-2 cursor-pointer">
                            <Image
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 shadow-lg"
                                priority
                            />
                            <h4 className="text-lg font-medium">{member.name}</h4>
                            <p className="text-sm text-gray-400">{member.role}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Team;