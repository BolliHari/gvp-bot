import React, { useState, useReducer, useEffect, useRef } from 'react';
import image2 from "./assets/Picture2-removebg-preview.png"
import bgvideo from "./assets/bgvideo2.mp4"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CollegeGallery from './pages/CollegeGallery ';
import { Route, Router, Routes } from 'react-router-dom';
import FacultyPage from './pages/FacultyPage';
import ContactPage from './pages/ContactPage';
// All Firebase and auth-related imports have been removed.

// The chat reducer handles all state updates for the chat history.


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<CollegeGallery />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
