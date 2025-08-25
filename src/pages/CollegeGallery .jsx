import React from "react";
import { motion } from "framer-motion";
import bgvideo from "../assets/bgvideo2.mp4"
import image2 from "../assets/gvp-coll2.webp"
import image3 from "../assets/library.webp"
import image4 from "../assets/ground1.webp"
import image5 from "../assets/entry-gate.webp"
import Navbar from "../components/Navbar";

// Example college images (replace with your own images)
const galleryData = [
    {
        title: "College Entrance",
        description: "Our modern college entrance with a welcoming atmosphere.",
        image: image5
    },
    {
        title: "Engineering Block",
        description: "Modern classrooms and labs for engineering students.",
        image: image2
    },
    {
        title: "College Library",
        description: "State-of-the-art library with extensive resources.",
        image: image3
    },
    {
        title: "Campus Grounds",
        description: "Beautiful green campus with relaxing study spaces.",
        image: image4
    },
    
];

const CollegeGallery = () => {
    return (
        <div className="min-h-screen text-white flex flex-col items-center p-10 pt-0 relative">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10"
            >
                <source src={bgvideo} type="video/mp4" />
            </video>
            <Navbar />
            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-10 mt-4">GVP Gallery</h1>
            {galleryData.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center w-8/12 gap-10 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                >
                    {/* Image */}
                    <div className="md:w-1/2 w-full">
                        <motion.img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-80 object-cover rounded-2xl shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>

                    {/* Text Info */}
                    <div className="md:w-1/2 w-full space-y-4">
                        <h2 className="text-3xl font-bold">{item.title}</h2>
                        <p className="text-gray-300">{item.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default CollegeGallery;
