import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage'; import './QuizSetupForm.css'; 
const QuizSetupForm = ({ onQuizStart }) => {
    const [playerName, setPlayerName] = useState('');
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const navigate = useNavigate();
            const [_, setStoredPlayerInfo] = useLocalStorage('currentPlayer', null);

        const isFormValid = playerName.trim() !== '' && category !== '' && difficulty !== '';

    const handleSubmit = (e) => {
        e.preventDefault();         if (isFormValid) {
            const playerInfo = { playerName, category, difficulty };
            onQuizStart(playerInfo);             setStoredPlayerInfo(playerInfo);             navigate('/quiz/start');         }
    };

        const categories = [
        { label: 'Jee Mains', value: 'Jee Mains' },
        { label: 'Jee Advance 2025', value: 'Jee Advance 2025' },
        { label: 'General Knowledge', value: 'general-knowledge' },
        { label: 'Science', value: 'science' },
        { label: 'History', value: 'history' },
        { label: 'Mathematics', value: 'mathematics' },
        { label: 'Sports', value: 'sports' },
        { label: 'Geography', value: 'geography' },
            ];

        const difficulties = [
        { label: 'Easy', value: 'easy' },
        { label: 'Medium', value: 'medium' },
        { label: 'Hard', value: 'hard' },
    ];

    return (
        <div className="quiz-setup-container">
            <h2>Set Up Your Quiz</h2>
            <form onSubmit={handleSubmit} className="quiz-setup-form">
                <div className="form-group">
                    <label htmlFor="playerName">Player Name:</label>
                    <input
                        type="text"
                        id="playerName"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        placeholder="Enter your name"
                        required                     />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Quiz Category:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                            <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="difficulty">Difficulty Level:</label>
                    <select
                        id="difficulty"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        required
                    >
                        <option value="">Select difficulty</option>
                        {difficulties.map((diff) => (
                            <option key={diff.value} value={diff.value}>{diff.label}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" disabled={!isFormValid}>Start Quiz</button>
            </form>
        </div>
    );
};

export default QuizSetupForm;