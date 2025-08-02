import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import AboutUs from "../components/aboutcomponents/AboutUs";
import Testimonials from "../components/aboutcomponents/Testimonials";
import Team from "../components/aboutcomponents/Team";
import { OurServices } from "../components/homecarts/OurServices";

const page = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-900 text-white min-h-screen px-6 md:px-16 lg:px-24 py-20 space-y-32 scroll-mt-24">
                <AboutUs/>
                <Testimonials/>
                <OurServices/>
                <Team/>
            </div>
            <Footer />
        </>
    );
};

export default page;
