'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../../../public/assets/images/QuickLearnlogo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="w-full shadow-md px-6 py-4 bg-black fixed top-0 left-0 z-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="text-yellow-500 text-2xl font-bold tracking-wide hover:underline">
          <Image src={logo} alt='quick logo' className='h-10 w-auto' priority/>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white text-base">
          <Link href="/about" className="hover:text-sky-400 transition">About</Link>
          <Link href="/contact" className="hover:text-sky-400 transition">Contact</Link>
          <Link href="/course" className="hover:text-sky-400 transition">Courses</Link>
          <Link
            href="/login"
            className="bg-sky-600 hover:bg-sky-700 px-5 py-2 rounded-lg font-medium text-white transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-black border-t border-gray-800 text-white flex flex-col space-y-4 py-4 px-2">
          <Link href="/about" onClick={toggleMenu} className="hover:text-sky-400">About</Link>
          <Link href="/contact" onClick={toggleMenu} className="hover:text-sky-400">Contact</Link>
          <Link href="/course" onClick={toggleMenu} className="hover:text-sky-400">Courses</Link>
          <Link
            href="/login"
            onClick={toggleMenu}
            className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-lg text-center transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  )
}
