import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import questionsData from '../data/questions';
import QuizQuestion from '../components/QuizQuestion';

const QUESTION_TIMER_SECONDS = 15;

const QuizPage = ({ playerInfo, setQuizResults }) => {
    const navigate = useNavigate();
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswerLocked, setIsAnswerLocked] = useState(false);
    const [timer, setTimer] = useState(QUESTION_TIMER_SECONDS);
    const [quizStartTime, setQuizStartTime] = useState(null);
    const [questionTimings, setQuestionTimings] = useState([]);

    const timerRef = useRef(null);

    const handleAnswerSelect = useCallback((answer) => {
        if (isAnswerLocked) return;
        setIsAnswerLocked(true);
        setSelectedAnswer(answer);
        clearInterval(timerRef.current);

        const currentQuestion = filteredQuestions[currentQuestionIndex];
        const timeTakenForQuestion = QUESTION_TIMER_SECONDS - timer;

        setQuestionTimings(prev => [...prev, {
            questionId: currentQuestion.id,
            timeTaken: timeTakenForQuestion,
            isCorrect: answer === currentQuestion.correctAnswer
        }]);

        if (answer === currentQuestion.correctAnswer) {
            setScore(prev => prev + 1);
            setCorrectAnswersCount(prev => prev + 1);
        }

        setTimeout(() => {
            if (currentQuestionIndex < filteredQuestions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
            } else {
                const endTime = Date.now();
                const totalQuizTime = Math.floor((endTime - quizStartTime) / 1000);

                const finalResults = {
                    playerName: playerInfo.playerName,
                    score: score + (answer === currentQuestion.correctAnswer ? 1 : 0),
                    correctAnswers: correctAnswersCount + (answer === currentQuestion.correctAnswer ? 1 : 0),
                    totalTimeTaken: totalQuizTime,
                    questionTimings: [...questionTimings, {
                        questionId: currentQuestion.id,
                        timeTaken: timeTakenForQuestion,
                        isCorrect: answer === currentQuestion.correctAnswer
                    }],
                    date: new Date().toISOString(),
                    category: playerInfo.category,
                    difficulty: playerInfo.difficulty,
                };

                setQuizResults(finalResults);
                navigate('/results');
            }
        }, 1500);
    }, [
        filteredQuestions,
        currentQuestionIndex,
        isAnswerLocked,
        timer,
        playerInfo,
        navigate,
        setQuizResults,
        score,
        correctAnswersCount,
        quizStartTime,
        questionTimings
    ]);

    useEffect(() => {
        if (!playerInfo) {
            navigate('/setup');
            return;
        }
        const filtered = questionsData.filter(q =>
            q.category === playerInfo.category && q.difficulty === playerInfo.difficulty
        ).sort(() => Math.random() - 0.5);
        setFilteredQuestions(filtered);
        setQuizStartTime(Date.now());
        setCurrentQuestionIndex(0);
        setScore(0);
        setCorrectAnswersCount(0);
        setQuestionTimings([]);
    }, [playerInfo, navigate]);

    useEffect(() => {
        if (filteredQuestions.length === 0 || currentQuestionIndex >= filteredQuestions.length) {
            clearInterval(timerRef.current);
            return;
        }

        setTimer(QUESTION_TIMER_SECONDS);
        setIsAnswerLocked(false);
        setSelectedAnswer(null);

        timerRef.current = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    handleAnswerSelect(null);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerRef.current);
    }, [currentQuestionIndex, filteredQuestions.length, handleAnswerSelect]);

    if (!playerInfo || filteredQuestions.length === 0) {
        return (
            <div className="quiz-container loading-state">
                Loading quiz or no questions available for this category/difficulty.
                <br/>
                Please ensure you've selected a category and difficulty on the <Link to="/setup">Start Quiz</Link> page.
            </div>
        );
    }

    const currentQuestion = filteredQuestions[currentQuestionIndex];
    const progress = Math.round(((currentQuestionIndex + 1) / filteredQuestions.length) * 100);

    return (
        <div className="quiz-container">
            <h3 className="quiz-info">
                Player: {playerInfo.playerName} | Category: {playerInfo.category} | Difficulty: {playerInfo.difficulty}
            </h3>
            <div className="quiz-header">
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="question-count">Question {currentQuestionIndex + 1} / {filteredQuestions.length}</div>
                <div className="timer">Time Left: {timer}s</div>
            </div>
            <QuizQuestion
                question={currentQuestion}
                onAnswerSelect={handleAnswerSelect}
                selectedAnswer={selectedAnswer}
                isAnswerLocked={isAnswerLocked}
                timer={timer}
            />
        </div>
    );
};

export default QuizPage;