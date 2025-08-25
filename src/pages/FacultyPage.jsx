import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import bgvideo from "../assets/bgvideo2.mp4"
import img2 from "../assets/krishnaveni.jpg"
import img3 from "../assets/P.A-Nageswar-Rao.jpg"
import img4 from "../assets/dr.adinarayana.jpg"
import img5 from "../assets/Mr.-Ch.-Manohar-Kumar.jpg"
import img6 from "../assets/Mr.-S.-Venkatesh.jpg"
import img7 from "../assets/Mr.-V.-Ram-Nishanth.jpg"
import img8 from "../assets/Soujanya_photo.jpg"
import img9 from "../assets/rajue_photo.jpeg"
import img10 from "../assets/Mr.-A.-Mahesh-Babu.jpg"

// --- Data for Faculty Members ---
// This data is based on the information you provided earlier.
// Placeholder images are used for demonstration.
const facultyData = [
    {
        name: "Dr. S. Krishna Veni",
        designation: "Professor",
        qualification: "M.Tech, Ph. D",
        specialization: "Antenna Arrays",
        email: "drkrishnaveni@gvpcdpgc.edu.in",
        imageUrl: img2,
    },
    {
        name: "Dr. P. A. Nageswara Rao",
        designation: "Professor & H.O.D",
        qualification: "M.E, Ph. D",
        specialization: "Process Controlled Instrumentation, Antenna",
        email: "drnageswararao@gvpcdpgc.edu.in",
        imageUrl: img3,
    },
    {
        name: "Dr. V.Adinarayana",
        designation: "Associate Professor",
        qualification: "B.E, M.E, Ph.D",
        specialization: "Wireless Communications",
        email: "dradinarayana@gvpcdpgc.edu.in",
        imageUrl: img4,
    },
    {
        name: "Dr. Ch. Manohar Kumar",
        designation: "Associate Professor",
        qualification: "B. Tech, M. Tech, Ph.D",
        specialization: "Radar & Microwave Engineering",
        email: "manohar@gvpcdpgc.edu.in",
        imageUrl: img5,
    },
    {
        name: "Mr. S. Venkatesh",
        designation: "Assistant Professor",
        qualification: "B. Tech, M. Tech",
        specialization: "V.L.S.I System Design",
        email: "venkateshece@gvpcdpgc.edu.in",
        imageUrl: img6,
    },
    {
        name: "Mr. V. Ram Nishanth",
        designation: "Assistant Professor",
        qualification: "B. Tech, M. Tech",
        specialization: "Communication Systems",
        email: "ramnishanthvanka@gvpcdpgc.edu.in",
        imageUrl: img7,
    },
    {
        name: "Mrs. G.Sowjanya Lakshmi",
        designation: "Assistant Professor",
        qualification: "B.E, M.Tech",
        specialization: "V.L.S.I System Design",
        email: "G.Sowjanya@gvpcdpgc.edu.in",
        imageUrl: img8,
    },
    {
        name: "Mr. E. Raju",
        designation: "Assistant Professor",
        qualification: "B.Tech, M.Tech",
        specialization: "Digital Systems and Signal Processing",
        email: "rajuegala@gvpcdpgc.edu.in",
        imageUrl: img9,
    },
    {
        name: "Mr. A. Mahesh Babu",
        designation: "Assistant Professor",
        qualification: "B.Tech, M.Tech",
        specialization: "Radar & Microwave Engineering",
        email: "maheshbabu07402@gvpcdpgc.edu.in",
        imageUrl: img10,
    },
];

// --- SVG Icons for better UI ---
const QualificationIcon = () => (
    <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.083 12.083 0 0121 18.782V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-.218c0-1.892.384-3.734 1.17-5.36a11.99 11.99 0 011.84-2.99A12.083 12.083 0 0112 14z"></path></svg>
);

const SpecializationIcon = () => (
    <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4M17 3v4m-2-2h4M15 17v4m2-2h-4M9 9l2 2 4-4M12 21a9 9 0 110-18 9 9 0 010 18z"></path></svg>
);

const EmailIcon = () => (
    <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

// --- Animation Variants for Framer Motion ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Stagger the animation of children
        },
    },
};

const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
        },
    },
};

// --- Faculty Card Component ---
const FacultyCard = ({ name, designation, qualification, specialization, email, imageUrl }) => {
    return (
        <motion.div
            variants={cardVariants}
            className="bg-white/95 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out w-full max-w-xs mx-auto"
        >
            <div className="relative w-full">
                <img className="h-56 ml-19" src={imageUrl} alt={`Photo of ${name}`} />
                <div className="absolute top-0 right-0 bg-violet-600 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold">
                    {designation}
                </div>
            </div>
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
                <div className="space-y-3 mt-4 text-gray-700">
                    <div className="flex items-start">
                        <QualificationIcon />
                        <span>{qualification}</span>
                    </div>
                    <div className="flex items-start">
                        <SpecializationIcon />
                        <span>{specialization}</span>
                    </div>
                    <div className="flex items-start">
                        <EmailIcon />
                        <a href={`mailto:${email}`} className="text-violet-600 hover:underline break-all">{email}</a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// --- Main Faculty Page Component ---
function FacultyPage() {
    return (
        <div className="bg-transparent min-h-screen font-sans relative">
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

            <div className="container mx-auto px-8 md:px-16 lg:px-24 py-12">
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-extrabold text-white"
                    >
                        Meet Our <span className="text-violet-600">Faculty</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
                    >
                        Our distinguished faculty members from the Department of Electronics and Communication Engineering.
                    </motion.p>
                </div>

                {/* Animated Grid for Faculty Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {facultyData.map((faculty, index) => (
                        <FacultyCard
                            key={index}
                            name={faculty.name}
                            designation={faculty.designation}
                            qualification={faculty.qualification}
                            specialization={faculty.specialization}
                            email={faculty.email}
                            imageUrl={faculty.imageUrl}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default FacultyPage;
