'use client'
import { useState } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Header from "../components/other/Header";

export default function page() {
    const [error, setError] = useState({});
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const validate = () => {
        const validationErrors = {}
        if (!data.name.trim()) {
            validationErrors.name = "Name is Required";
        }
        if (!data.email.trim()) {
            validationErrors.email = "Email is Required";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            validationErrors.email = "Invalid email";
        }
        if (!data.message.trim()) {
            validationErrors.message = "Message is Required";
        }
        setError(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            alert("Please fill in all fields correctly!");
            return;
        }
        const payload = {
            ...data,
            access_key: process.env.ACCESS_KEY,
        }
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",
                },
                body: JSON.stringify(payload),
            });
            const result = await res.json();
            if (result.success) {
                alert("Form submitted successfully!");
                setData({
                    name: '',
                    email: '',
                    message: '',
                });
                setError({});
            } else {
                alert("Something went wrong!");
            }
        } catch (error) {
            console.error("Submission Error: ", error);
            alert("Network error. Try again later.");
        }
    };
    return (
        <>
            <Navbar />
            <Header pageName={"Contact"} pageAbout={"hii, this is about page! "} />
            <div className="w-full flex justify-center items-center py-10 bg-gray-900 min-h-screen">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-xl bg-gray-800 rounded-2xl p-10 shadow-2xl text-white space-y-8"
                >
                    <h2 className="text-3xl font-bold text-center text-sky-400">Contact Us</h2>

                    {/* Full Name */}
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium mb-2">
                            Full Name
                        </label>
                        <input
                            className={`w-full p-4 rounded-xl text-white bg-gray-700 placeholder-gray-400 border ${error.name ? "border-red-500" : "border-gray-600"
                                } focus:outline-none focus:ring-2 focus:ring-sky-500`}
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={data?.name}
                            onChange={handleChange}
                        />
                        {error.name && <p className="text-red-500 mt-1 text-sm">{error.name}</p>}
                    </div>

                    {/* Email Address */}
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            className={`w-full p-4 rounded-xl text-white bg-gray-700 placeholder-gray-400 border ${error.email ? "border-red-500" : "border-gray-600"
                                } focus:outline-none focus:ring-2 focus:ring-sky-500`}
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={data?.email}
                            onChange={handleChange}
                        />
                        {error.email && (
                            <p className="text-red-500 mt-1 text-sm">{error.email}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            className={`w-full p-4 rounded-xl text-white bg-gray-700 placeholder-gray-400 border ${error.message ? "border-red-500" : "border-gray-600"
                                } focus:outline-none focus:ring-2 focus:ring-sky-500`}
                            name="message"
                            rows="5"
                            placeholder="Type your message..."
                            value={data?.message}
                            onChange={handleChange}
                        />
                        {error.message && (
                            <p className="text-red-500 mt-1 text-sm">{error.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            id="send-btn"
                            className="bg-sky-600 hover:bg-sky-700 transition px-8 py-3 rounded-xl text-lg font-semibold text-white"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}