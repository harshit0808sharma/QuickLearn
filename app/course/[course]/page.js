
import Footer from '@/app/components/layout/Footer';
import Navbar from '@/app/components/layout/Navbar';
import Link from 'next/link';
// import {TiTick} from 'react-icons/ti'
import { FaBullseye, FaChild, FaMoneyBillAlt, FaStar, FaUniversalAccess } from 'react-icons/fa';
// import { FaBullseye, FaCertificate } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { CoursesData } from '@/public/assets/data';
import Image from 'next/image';
import Header from '@/app/components/other/Header';
import BackButton from '@/app/components/other/BackButton';
// import { useParams } from 'next/navigation';

const Page = async ({ params }) => {
    const unwrappedParams = await params;
    const course = CoursesData.find((item) => item.courseName.toLowerCase().replace(/\s+/g, '') === unwrappedParams.course);
    
    return (
        <>
            <Navbar />
            <Header pageName={"Courses"} pageAbout={`course / ${unwrappedParams.course}`}/>
            <div className="w-full flex justify-center py-20 mx-auto bg-gray-900 scroll-mt-24" id='html-course'>
                <div className="flex flex-col justify-center p-5 rounded-2xl bg-gray-800 md:flex-row gap-10 border-2">
                    <Image
                        src={course?.image?.src} // Replace with your image path
                        alt={course?.courseName}
                        className="w-full md:w-1/2 h-64 object-cover rounded-xl"
                        width={100}
                        height={100}
                        priority
                    />

                    <div className="flex flex-col gap-10 text-white">
                        <div className=''>
                            <h1 className="text-5xl font-bold text-white mb-4">
                                {course?.courseName}
                            </h1>
                            <p className="text-white mb-4">
                                {course?.description}
                            </p>
                            <div className="flex flex-col gap-4">
                                <p className="font-bold text-lg flex items-center gap-2">Total: {course?.questions}+  Questions</p>
                                <p className="font-bold text-lg flex items-center gap-2">Review: <FaStar className="text-yellow-300" /> {course?.review}</p>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                                {course?.features?.a && <li className='flex items-center text-lg'><span className='w-10 h-10 rounded-full bg-green-100 flex justify-center items-center mr-4'><FaQuestionCircle className=' text-green-600' /></span>{course.features.a}</li>}
                                {course?.features?.b && <li className='flex items-center text-lg'><span className='w-10 h-10 rounded-full bg-pink-100 flex justify-center items-center mr-4'><FaBullseye className='text-pink-600' /></span>{course.features.b}</li>}
                                {course?.features?.c && <li className='flex items-center text-lg'><span className='w-10 h-10 rounded-full bg-red-100 flex justify-center items-center mr-4'><AiOutlineSafetyCertificate className='text-red-600' /></span>{course.features.c}</li>}
                                {course?.features?.d && <li className='flex items-center text-lg'><span className='w-10 h-10 rounded-full bg-blue-100 flex justify-center items-center mr-4'><FaMoneyBillAlt className='text-blue-600' /></span>{course.features.d}</li>}
                            </ul>
                        </div>

                        <Link
                            href={`/course/${course?.courseName.toLowerCase().replace(/\s+/g, '')}/1`}
                            className="inline-block text-center bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition border-2"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
            <BackButton/>
            <Footer />
        </>
    )
}

export default Page;