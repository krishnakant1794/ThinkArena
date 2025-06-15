import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
                <Router>
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
                </Router>
            </main>
        </>
    );
}

export default App;