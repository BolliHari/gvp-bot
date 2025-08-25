import React from 'react'
import { Link } from "react-router-dom";
import image2 from "../assets/Picture2-removebg-preview.png"


const Navbar = () => {
    return (
        <nav className="w-full px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    {/* Example Logo Icon */}
                    <img src={image2} alt="" className="w-full h-full" />
                </div>
                <span className="text-white font-semibold text-2xl">G.V.P</span>
            </div>

            {/* Center Menu */}
            <div className="hidden bg-purple-600/40 backdrop-blur-md text-white rounded-full px-6 py-2 md:flex items-center space-x-6 shadow-lg border border-white/10">
                <Link to="/" className="font-semibold hover:text-gray-200">Chatbot</Link>
                <Link to="/gallery" className="hover:text-gray-200">Gallery</Link>
                <Link to="/faculty" className="hover:text-gray-200">Faculty</Link>
                <Link to="/contact" className="hover:text-gray-200">Contact</Link>
                <span className="h-5 border-r border-white/20"></span>
                <button className="hover:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </button>
            </div>

            {/* Right Buttons */}
            <div className="md:flex items-center space-x-6 hidden">
                <a
                    href="#"
                    className="text-white relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                    Log in
                </a>
                <a
                    href="#"
                    className="text-white relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                    Sign up
                </a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

        </nav>

    )
}

export default Navbar
