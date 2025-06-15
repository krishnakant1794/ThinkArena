import React from 'react';
import './QuizQuestion.css'; 
const QuizQuestion = ({ question, onAnswerSelect, selectedAnswer, isAnswerLocked }) => {
    return (
        <div className="question-card">
            <p className="question-text">{question.question}</p>
            <div className="options-container">
                {question.options.map((option) => {
                    const isCorrect = option === question.correctAnswer;
                    const isSelected = option === selectedAnswer;

                                                                                                                        let optionClassName = 'option-btn';
                    if (isAnswerLocked) {
                        if (isCorrect) {
                            optionClassName += ' correct';
                        } else if (isSelected) {
                            optionClassName += ' incorrect';
                        }
                    }
                    if (isSelected) {
                        optionClassName += ' selected';                     }


                    return (
                        <button
                            key={option}                             className={optionClassName}
                            onClick={() => onAnswerSelect(option)}
                            disabled={isAnswerLocked}                         >
                            {option}
                        </button>
                    );
                })}
            </div>
            {isAnswerLocked && (                 <div className="feedback-message">
                    {selectedAnswer === question.correctAnswer ? (
                        <p className="correct-feedback">Correct! 🎉</p>
                    ) : (
                        <p className="incorrect-feedback">
                            Incorrect. The correct answer was: <span className="correct-answer-display">{question.correctAnswer}</span>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default QuizQuestion;