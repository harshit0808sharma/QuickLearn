'use client';

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Header from "../components/other/Header";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <Header pageName="Contact" pageAbout="Feel free to get in touch with us!" />

            <div className="w-full flex justify-center items-center py-10 bg-gray-900 min-h-screen">
                <form
                    className="w-full max-w-xl bg-gray-800 rounded-2xl p-10 shadow-2xl text-white space-y-8"
                >
                    <h2 className="text-3xl font-bold text-center text-sky-400">Contact Us</h2>

                    {/* Full Name */}
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            className="w-full p-4 rounded-xl text-white bg-gray-700 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-4 rounded-xl text-white bg-gray-700 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Type your message..."
                            className="w-full p-4 rounded-xl text-white bg-gray-700 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    {/* Submit Button (does nothing) */}
                    <div className="text-center">
                        <button
                            type="button"
                            className="bg-sky-600 hover:bg-sky-700 transition px-8 py-3 rounded-xl text-lg font-semibold text-white"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    );
}


// 'use client';

// import { useState } from "react";
// import Footer from "../components/layout/Footer";
// import Navbar from "../components/layout/Navbar";
// import Header from "../components/other/Header";

// export default function ContactPage() {
//     const [error, setError] = useState({});
//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         message: "",
//     });
//     const [loading, setLoading] = useState(false);

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setData({
//             ...data,
//             [name]: value,
//         });
//     };

//     const validate = () => {
//         const validationErrors = {};
//         if (!data.name.trim()) {
//             validationErrors.name = "Name is required";
//         }
//         if (!data.email.trim()) {
//             validationErrors.email = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//             validationErrors.email = "Invalid email format";
//         }
//         if (!data.message.trim()) {
//             validationErrors.message = "Message is required";
//         }
//         setError(validationErrors);
//         return Object.keys(validationErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!validate()) {
//             alert("Please fill in all fields correctly!");
//             return;
//         }

//         setLoading(true);

//         const payload = {
//             ...data,
//             access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
//         };

//         try {
//             const res = await fetch("https://api.web3forms.com/submit", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     accept: "application/json",
//                 },
//                 body: JSON.stringify(payload),
//             });

//             const result = await res.json();
//             if (result.success) {
//                 alert("Form submitted successfully!");
//                 setData({ name: "", email: "", message: "" });
//                 setError({});
//             } else {
//                 alert("Submission failed!");
//             }
//         } catch (err) {
//             console.error("Submission Error:", err);
//             alert("Network error. Try again later.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <Header pageName={"Contact"} pageAbout={"Feel free to get in touch with us!"} />

//             <div className="w-full flex justify-center items-center py-10 bg-gray-900 min-h-screen">
//                 <form
//                     onSubmit={handleSubmit}
//                     className="w-full max-w-xl bg-gray-800 rounded-2xl p-10 shadow-2xl text-white space-y-8"
//                 >
//                     <h2 className="text-3xl font-bold text-center text-sky-400">Contact Us</h2>

//                     {/* Name */}
//                     <div>
//                         <label htmlFor="name" className="block text-lg font-medium mb-2">
//                             Full Name
//                         </label>
//                         <input
//                             name="name"
//                             value={data.name}
//                             onChange={handleChange}
//                             placeholder="Enter your full name"
//                             className={`w-full p-4 rounded-xl text-white bg-gray-700 placeholder-gray-400 border ${error.name ? "border-red-500" : "border-gray-600"} focus:outline-none focus:ring-2 focus:ring-sky-500`}
//                             type="text"
//                         />
//                         {error.name && <p className="text-red-500 mt-1 text-sm">{error.name}</p>}
//                     </div>

//                     {/* Email */}
//                     <div>
//                         <label htmlFor="email" className="block text-lg font-medium mb-2">
//                             Email Address
//                         </label>
//                         <input
//                             name="email"
//                             value={data.email}
//                             onChange={handleChange}
//                             placeholder="Enter your email"
//                             className={`w-full p-4 rounded-xl text-white bg-gray-700 placeholder-gray-400 border ${error.email ? "border-red-500" : "border-gray-600"} focus:outline-none focus:ring-2 focus:ring-sky-500`}
//                             type="email"
//                         />
//                         {error.email && <p className="text-red-500 mt-1 text-sm">{error.email}</p>}
//                     </div>

//                     {/* Message */}
//                     <div>
//                         <label htmlFor="message" className="block text-lg font-medium mb-2">
//                             Message
//                         </label>
//                         <textarea
//                             name="message"
//                             value={data.message}
//                             onChange={handleChange}
//                             placeholder="Type your message..."
//                             rows="5"
//                             className={`w-full p-4 rounded-xl text-white bg-gray-700 placeholder-gray-400 border ${error.message ? "border-red-500" : "border-gray-600"} focus:outline-none focus:ring-2 focus:ring-sky-500`}
//                         />
//                         {error.message && <p className="text-red-500 mt-1 text-sm">{error.message}</p>}
//                     </div>

//                     {/* Submit */}
//                     <div className="text-center">
//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="bg-sky-600 hover:bg-sky-700 transition px-8 py-3 rounded-xl text-lg font-semibold text-white disabled:opacity-50"
//                         >
//                             {loading ? "Sending..." : "Send Message"}
//                         </button>
//                     </div>
//                 </form>
//             </div>

//             <Footer />
//         </>
//     );
// }
