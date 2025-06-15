import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css'; import heroImage from '../assets/selected.png'; 
const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Test Your Knowledge!</h1>
                <p>Challenge yourself with our interactive quizzes across various categories and difficulty levels. Sharpen your mind and have fun!</p>
                <Link to="/setup" className="start-quiz-btn">Start Quiz</Link>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Quiz Illustration" />
            </div>
        </section>
    );
};

export default HeroSection;