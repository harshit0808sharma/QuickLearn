import Hero from "./components/homecarts/Hero";
import OurCourses from "./components/homecarts/OurCourses";
import { OurServices } from "./components/homecarts/OurServices";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Review from "./components/other/Review";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Content wrapper with top padding to prevent overlap with fixed navbar */}
      <main className="pt-24 px-4 sm:px-6 md:px-8 overflow-x-hidden bg-gray-900">
        <Hero />
        <OurCourses />
        <Review />
        <OurServices />
      </main>

      <Footer />
    </>
  );
}
