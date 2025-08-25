import React, { useState, useReducer, useEffect, useRef } from 'react';
import image2 from "../assets/Picture2-removebg-preview.png"
import bgvideo from "../assets/bgvideo2.mp4"
import students from "./students"
import teachers from "./teachers"
import timetable from "./timetable"
import Navbar from '../components/Navbar';

const chatReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload],
                isLoading: false,
            };
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            };
        case 'SET_INITIAL_MESSAGES':
            return {
                ...state,
                messages: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
};

const Home = () => {
    const [inputMessage, setInputMessage] = useState('');
    const [chatState, dispatch] = useReducer(chatReducer, {
        messages: [],
        isLoading: false,
    });
    console.log(students);

    const chatContainerRef = useRef(null);

    // === DATA SECTION ===
    // IMPORTANT: Replace the dummy data below with your actual student information.

    // A mapping of subjects to teachers.

    // === END OF DATA SECTION ===

    // Scroll to the bottom of the chat container when new messages arrive.
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatState.messages]);

    // Set initial welcome message on first load.
    useEffect(() => {
        dispatch({
            type: 'SET_INITIAL_MESSAGES', payload: [{
                sender: 'bot',
                text: 'Hello! I am Gayatri Vidya Parishad college chatbot. How can I help you today? You can ask me about a student, a subject doubt, or general college information.'
            }]
        });
    }, []);

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        const userMessage = inputMessage.trim();
        dispatch({ type: 'ADD_MESSAGE', payload: { sender: 'user', text: userMessage } });
        setInputMessage('');
        dispatch({ type: 'SET_LOADING' });

        let botResponseText = '';


        // NEW: Logic for handling the attendance query
        if (userMessage.toLowerCase().includes('what is running now') || userMessage.toLowerCase().includes('what class is it')) {
            const now = new Date();
            // Get day of the week (0 for Sunday, 1 for Monday, etc.)
            const dayOfWeek = now.getDay();
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDay = days[dayOfWeek];

            // Convert current time to a comparable format (HHMM).
            const currentHour = now.getHours();
            const currentMinutes = now.getMinutes();
            const currentTimeInMinutes = currentHour * 60 + currentMinutes;

            let currentClass = null;
            let foundDay = timetable.find(t => t.day === currentDay);

            if (foundDay) {
                for (const entry of foundDay.schedule) {
                    const [start, end] = entry.time.split(' - ').map(t => {
                        const [time, ampm] = t.split(' ');
                        let [h, m] = time.split(':').map(Number);
                        if (ampm === 'PM' && h !== 12) h += 12;
                        if (ampm === 'AM' && h === 12) h = 0; // Midnight case
                        return h * 60 + m;
                    });

                    if (currentTimeInMinutes >= start && currentTimeInMinutes <= end) {
                        currentClass = entry;
                        break;
                    }
                }
            }

            let prompt = '';
            if (currentClass) {
                prompt = `
                    You are a helpful college chatbot. The user wants to know what class is running right now.
                    Based on the following information, provide a concise and helpful response.
                    
                    Current Class Information:
                    Subject Name: ${currentClass.subjectName}
                    Faculty: ${currentClass.faculty}
                    Time: ${currentClass.time}
                    
                    User's question:
                    "${userMessage}"
                `;
            } else {
                prompt = `
                    You are a helpful college chatbot. The user wants to know what class is running right now.
                    Based on the following information, provide a concise and helpful response.
                    
                    There is currently no class scheduled. It might be a break or outside of class hours.
                    
                    User's question:
                    "${userMessage}"
                `;
            }
        }
        // Check for student doubt query (e.g., "doubt about ECE")
        else if (userMessage.toLowerCase().includes('doubt about')) {
            const subjectMatch = userMessage.toLowerCase().match(/doubt about\s(.*)/);
            const subject = subjectMatch ? subjectMatch[1].trim() : '';

            // Updated prompt to include the entire teacher dataset for the AI to analyze.
            const prompt = `
                You are a helpful college chatbot. A student has a doubt about the subject "${subject}". Based on the following teacher data, recommend a teacher to help. 
                Use the teacher's name, designation, and specialization to provide a helpful response.
                
                Teacher data (in JSON format):
                ${JSON.stringify(teachers)}
                
                User's question:
                "${userMessage}"
            `;

            try {
                const response = await callGeminiAPI(prompt);
                botResponseText = response;
            } catch (error) {
                // Updated error handling for the API call
                botResponseText = `I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try asking again in a moment!`;
            }
        }
        else if (
            userMessage.toLowerCase().includes("roll no") ||
            userMessage.toLowerCase().includes("cgpa") ||
            userMessage.toLowerCase().includes("attendance") ||
            userMessage.toLowerCase().includes("backlogs")
        ) {
            const prompt = `
                You are a helpful college chatbot. Based on the following student data, answer the user's question.
                
                Do not provide information about students not in the provided data. Do not mention that you have access to a database.
                
                Student data (in JSON format):
                ${JSON.stringify(students)}
                
                User's question:
                "${userMessage}"
            `;

            try {
                const response = await callGeminiAPI(prompt);
                botResponseText = response;
            } catch (error) {
                botResponseText = `I'm sorry, I'm having trouble retrieving student information at the moment. Please try again!`;
            }
        }
        // All other messages are general questions.
        else {
            // Convert your data arrays to JSON strings
            const studentDataJSON = JSON.stringify(students);
            const teacherDataJSON = JSON.stringify(teachers);
            const timetableDataJSON = JSON.stringify(timetable);

            // The final, updated prompt
            const prompt = `As a helpful and friendly college chatbot, answer the user's question concisely and professionally.

            You have been provided with the following specific data in JSON format:
            ---
            STUDENT DATA:
            ${studentDataJSON}
            ---
            TEACHER DATA:
            ${teacherDataJSON}
            ---
            TIMETABLE DATA:
            ${timetableDataJSON}
            ---

            Follow these instructions to answer the user's question:
            1.  **Prioritize Provided Data:** First, analyze the question to see if it can be answered using ONLY the provided JSON data. This is for specific questions about students, teachers, or schedules.
            2.  **Use General Knowledge:** If the question cannot be answered from the data, use your full, broader knowledge base to provide a helpful and accurate response, whether the topic is about the college or anything else When a question relates to the college (like placements, curriculum, or campus life), provide a relevant and supportive answer.

            college Name: GAYATRI VIDYA PARISHAD COLLEGE FOR DEGREE AND PG COURSES (AUTONOMOUS)
            (Affiliated to Andhra University | Accredited by NAAC with 'A' Grade)
            (MBA and UG Engineering B.Tech(CE,CSE,ECE and ME) programs are Accredited by NBA)

            The user's question is: "${userMessage}"`;

            try {
                const response = await callGeminiAPI(prompt);
                botResponseText = response;
            } catch (error) {
                botResponseText = `I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again in a moment!`;
            }
        }

        dispatch({ type: 'ADD_MESSAGE', payload: { sender: 'bot', text: botResponseText } });
    };

    const callGeminiAPI = async (prompt) => {
        try {
            const apiKey = 'AIzaSyAgRe_ERL8pVFw_8DOUBw1DHcsiaY3McYU'; // Leave as-is, Canvas will provide it.
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            if (result.candidates && result.candidates.length > 0 && result.candidates[0].content && result.candidates[0].content.parts && result.candidates[0].content.parts.length > 0) {
                return result.candidates[0].content.parts[0].text;
            } else {
                throw new Error('Invalid API response structure');
            }
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            throw error;
        }
    };
    return (
        <div className="flex flex-col h-screen w-full
        relative overflow-hidden font-sans p-4">
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
            <div className="flex-1 flex flex-col w-full max-w-6xl mx-auto rounded-3xl shadow-2xl bg-white/10 backdrop-blur-sm border border-white/10 overflow-hidden transform transition-all duration-300 mt-3">

                {/* Chat Messages Container */}
                <div ref={chatContainerRef} className="flex-1 overflow-y-auto scrollbar-none p-6 space-y-4 bg-transparent">
                    {chatState.messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[70%] md:max-w-[60%] p-4 rounded-xl shadow-md whitespace-pre-wrap leading-relaxed ${msg.sender === 'user'
                                    ? 'bg-violet-600/90 text-white rounded-br-none'
                                    : 'bg-violet-600/90 text-white rounded-bl-none border border-white/10'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {chatState.isLoading && (
                        <div className="flex justify-start">
                            <div className="p-4 bg-white/5 backdrop-blur-sm text-gray-300 rounded-xl rounded-bl-none shadow-sm border border-white/10">
                                <span className="animate-pulse">Typing...</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Chat Input Section */}
                <div className="bg-white/5 backdrop-blur-sm p-6 border-t border-white/10">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-full flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full p-2 shadow-inner border border-white/10">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSendMessage();
                                    }
                                }}
                                className="flex-1 p-3 bg-transparent text-white rounded-full focus:outline-none placeholder-gray-400 text-sm"
                                placeholder="Ask me a question..."
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-violet-600 text-white p-3 rounded-full shadow-lg hover:bg-violet-700 transition-transform hover:scale-105"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home
