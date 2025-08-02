'use client'

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
    const router = useRouter();
    return(
        <>
            <button onClick={()=> router.back()} className="fixed bottom-4 right-4 z-50 bg-blue-900 text-white px-4 py-2 flex items-center gap-2 rounded-full shadow-lg hover:bg-blue-900 transition cursor-pointer">
                <FaArrowLeft className="w-5 h-5"/>
                <span className="hidden sm:inline">Go Back</span>
            </button>
        </>
    )
}

export default BackButton;