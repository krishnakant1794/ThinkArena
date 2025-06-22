import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import './ResultsDisplay.css';

const ResultsDisplay = ({ quizResults }) => {
    const navigate = useNavigate();
    const [, setPastScores] = useLocalStorage('pastScores', []);

    useEffect(() => {
        if (!quizResults) {
            navigate('/');
            return;
        }
        setPastScores(prevScores => [...prevScores, quizResults]);
    }, [quizResults, navigate, setPastScores]);

    if (!quizResults) {
        return (
            <div className="results-container loading-state">
                <p>No quiz results to display. Please complete a quiz first.</p>
                <button onClick={() => navigate('/setup')}>Start New Quiz</button>
            </div>
        );
    }

    const { playerName, score, correctAnswers, totalTimeTaken, questionTimings } = quizResults;
    const totalQuestions = questionTimings ? questionTimings.length : 0;
    const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

    let motivationalMessage = '';
    let messageClass = '';
    if (percentage >= 90) {
        motivationalMessage = 'Quiz Champion! An outstanding performance!';
        messageClass = 'champion';
    } else if (percentage >= 70) {
        motivationalMessage = 'Great job! You\'re a quiz master!';
        messageClass = 'great';
    } else if (percentage >= 50) {
        motivationalMessage = 'Good effort! Keep practicing!';
        messageClass = 'good';
    } else {
        motivationalMessage = 'More caffeine, maybe? Don\'t give up!';
        messageClass = 'try-again';
    }

    const validTimings = questionTimings.filter(q => q.timeTaken !== undefined && q.timeTaken !== null);

    const fastestAnswerTime = validTimings.length > 0
        ? Math.min(...validTimings.map(q => q.timeTaken))
        : 'N/A';
    const slowestAnswerTime = validTimings.length > 0
        ? Math.max(...validTimings.map(q => q.timeTaken))
        : 'N/A';

    return (
        <div className="results-container">
            <h2>Quiz Results</h2>
            <div className="results-summary">
                <p><strong>Player:</strong> {playerName}</p>
                <p><strong>Final Score:</strong> {score} / {totalQuestions}</p>
                <p><strong>Correct Answers:</strong> {correctAnswers}</p>
                <p><strong>Total Time Taken:</strong> {totalTimeTaken} seconds</p>
                <p className={`motivational-message ${messageClass}`}>{motivationalMessage}</p>
            </div>

            {validTimings.length > 0 && (
                <div className="performance-stats">
                    <h3>Performance Insights:</h3>
                    <p>Fastest Answer Time: <span>{fastestAnswerTime}</span> seconds</p>
                    <p>Slowest Answer Time: <span>{slowestAnswerTime}</span> seconds</p>
                </div>
            )}

            <button onClick={() => navigate('/setup')} className="play-again-btn">Play Again</button>
            <button onClick={() => navigate('/scores')} className="view-scores-btn">View All Scores</button>
        </div>
    );
};

export default ResultsDisplay;