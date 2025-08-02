'use client'
import { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import BackButton from "../components/other/BackButton";
import Image from "next/image";
import logo from '../../public/assets/images/QuickLearnlogo.png'
import Link from "next/link";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 py-12 gap-10">
      <Link href="/">
        <Image src={logo} alt="quick logo" className="h-10 w-auto"/>
      </Link>
      <div className="w-full max-w-md bg-gray-700 border border-gray-600 rounded-2xl shadow-xl p-8 space-y-6 text-white">

        <h2 className="text-3xl font-bold text-center text-white">
          {isLogin ? "Welcome Back" : "Join QuickLearn"}
        </h2>

        <form className="space-y-5">
          {!isLogin && (
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-500" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full py-2 pl-10 pr-3 bg-gray-800 border border-gray-700 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          )}

          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full py-2 pl-10 pr-3 bg-gray-800 border border-gray-700 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 pl-10 pr-3 bg-gray-800 border border-gray-700 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 transition text-white py-2 rounded-lg font-semibold mt-4"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-400">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-sky-400 underline hover:text-sky-300"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-sky-400 underline hover:text-sky-300"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
      <BackButton/>
    </div>
  );
}
