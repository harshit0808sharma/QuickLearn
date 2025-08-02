// import Navbar from '../components/layout/Navbar'

import Hero from "./components/homecarts/Hero";
import OurCourses from "./components/homecarts/OurCourses";
import { OurServices } from "./components/homecarts/OurServices";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Review from "./components/other/Review";


export default function Home() {
    return (
        <>
            <div>
                <Navbar />
                <Hero />
                <OurCourses />
                <Review />
                <OurServices />
                <Footer />
            </div>
        </>
    )
}