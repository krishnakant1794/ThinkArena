// src/App.js (CORRECTED CODE)

import React, { useState } from 'react';
// REMOVE this line: import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// ONLY IMPORT Routes and Route here, as Router is provided by index.js
import { Routes, Route } from 'react-router-dom'; 

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import QuizSetupForm from './components/QuizSetupForm';
import QuizPage from './components/QuizPage';
import ResultsDisplay from './components/ResultsDisplay';
import ScoresLeaderboard from './components/ScoresLeaderboard';
import AboutPage from './components/AboutPage';
import NotFound from './components/NotFound';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

function App() {
    const [playerInfo, setPlayerInfo] = useLocalStorage('currentPlayer', null);
    const [quizResults, setQuizResults] = useState(null);

    const handleQuizSetup = (info) => {
        setPlayerInfo(info);
        setQuizResults(null);
    };

    return (
        <>
            <NavBar />
            <main>
                {/* REMOVE <Router> here. App is already wrapped by Router in index.js */}
                {/* <Router>  <--- DELETE THIS LINE */} 
                    <Routes>
                        <Route path="/" element={<HeroSection />} />
                        <Route path="/setup" element={<QuizSetupForm onQuizStart={handleQuizSetup} />} />
                        <Route
                            path="/quiz/start"
                            element={<QuizPage playerInfo={playerInfo} setQuizResults={setQuizResults} />}
                        />
                        <Route path="/results" element={<ResultsDisplay quizResults={quizResults} />} />
                        <Route path="/scores" element={<ScoresLeaderboard />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                {/* </Router> <--- DELETE THIS LINE */}
            </main>
        </>
    );
}

export default App;