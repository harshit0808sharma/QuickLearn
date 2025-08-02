'use client'
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-sky-500">QuickLearn</h2>
          <p className="text-gray-400">
            Empowering your journey with the best online learning experience.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <Link href="/" className="hover:text-sky-400 transition"><FaFacebookF /></Link>
            <Link href="/" className="hover:text-sky-400 transition"><FaTwitter /></Link>
            <Link href="/" className="hover:text-sky-400 transition"><FaInstagram /></Link>
            <Link href="/" className="hover:text-sky-400 transition"><FaLinkedinIn /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-sky-400 trLinknsition">Home</Link></li>
            <li><Link href="/about" className="hover:text-sky-400 transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-sky-400 transition">Contact</Link></li>
            <li><Link href="/course" className="hover:text-sky-400 transition">Courses</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">Get the latest updates in your inbox.</p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto flex-1 px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button onClick={() => alert('Thank you for subscribe!')} className="px-4 py-2 bg-sky-600 hover:bg-sky-700 transition rounded text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 mt-10 text-sm">
        &copy; {new Date().getFullYear()} QuickLearn. All rights reserved.
      </div>
    </footer>
  );
}


export default Footer;