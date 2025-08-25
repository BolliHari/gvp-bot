import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import bgvideo from "../assets/bgvideo2.mp4"

// --- SVG Icons for Contact Details ---
const LocationIcon = () => (
    <svg className="w-6 h-6 mr-3 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);

const EmailIcon = () => (
    <svg className="w-6 h-6 mr-3 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

const PhoneIcon = () => (
    <svg className="w-6 h-6 mr-3 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
);


// --- Main Contact Page Component ---
function ContactPage() {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission,
        // e.g., send the data to a server or an email service.
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We'll get back to you soon.");
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="bg-transparent min-h-screen font-sans text-gray-200 relative">
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
            <div className="container mx-auto px-4 sm:px-8 py-16">

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                        Get In <span className="text-violet-600">Touch</span>
                    </h1>
                    <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
                        We're here to help and answer any question you might have. We look forward to hearing from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information & Map */}
                    <div className="space-y-8">
                        <div className="p-8 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <LocationIcon />
                                    <p>GVP College for Degree and PG Courses<br />Rushikonda, Visakhapatnam, Andhra Pradesh 530045</p>
                                </div>
                                <div className="flex items-center">
                                    <EmailIcon />
                                    <a href="mailto:contact@gvpcdpgc.edu.in" className="hover:text-violet-600">contact@gvpcdpgc.edu.in</a>
                                </div>
                                <div className="flex items-center">
                                    <PhoneIcon />
                                    <a href="tel:+91-891-2739144" className="hover:text-violet-600">+91-891-2739144</a>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg shadow-lg overflow-hidden border border-white/30">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.905585398971!2d83.3959530751755!3d17.79698548316315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b3b8aaaaaab%3A0x1a78c1e330a173b!2sGayatri%20Vidya%20Parishad%20College%20for%20Degree%20and%20PG%20Courses!5e0!3m2!1sen!2sin!4v1693000000000!5m2!1sen!2sin"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="GVP College Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-8 bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-white/15 rounded-md border border-gray-300 focus:ring-violet-500 focus:border-violet-500 transition"
                                    placeholder="Bolli Hari"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-white/15 rounded-md border border-gray-300 focus:ring-violet-500 focus:border-violet-500 transition"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-white/15 rounded-md border border-gray-300 focus:ring-violet-500 focus:border-violet-500 transition"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-violet-600 text-white font-bold py-3 px-4 rounded-md hover:bg-violet-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
