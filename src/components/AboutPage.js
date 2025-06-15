import React from 'react';
import './AboutPage.css'; 
import meme1 from '../assets/meme1.gif'; 
import meme2 from '../assets/meme2.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const AboutPage = () => {
    return (
        <div className="about-container">
            <h1>About This ThinkArena</h1>
            <p>
                Welcome to ThinkArena,an interactive web application designed to challenge your knowledge and
                provide a fun learning experience! This app allows you to test yourself across various categories
                and difficulty levels, track your scores, and see your performance over time.
            </p>
            <div className="social-media-section">
                <h3>Connect with Me!</h3>
                <p>Feel free to reach out or check out my work on social media:</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/krishnakant-kumar1794/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/krishnakant1794" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://x.com/Krishnakant8281" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/share/1EK453BELL/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/kris.hna1794" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    
                    <a href="https://wa.me/9263945768" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>
                    
                   
                </div>
                <div>
                        <p className="footer-info">
                    &copy; 2025 ThinkArena . All rights reserved. |
                    Designed by <strong>Krishnakant Kumar</strong> 🎓<strong>B.Tech CSE</strong>  🏫 <strong>Central University of Jharkhand</strong> 🕒 on 15/06/25
                        </p>
                    </div>
            </div>

            <h3>Technologies Used:</h3>
            <ul>
                <li><strong>HTML5:</strong> For the basic semantic structure of the web pages.</li>
                <li><strong>CSS3:</strong> For styling, responsive design (making it look good on all devices),
                    and subtle animations to enhance user experience.</li>
                <li><strong>JavaScript (ES6+):</strong> The core logic and interactivity that powers the quiz
                    mechanics, timers, and score calculations.</li>
                <li><strong>ReactJS:</strong> The modern JavaScript library used for building a
                    component-based, efficient, and scalable user interface. It makes managing complex UI
                    states much easier.</li>
                <li><strong>React Router DOM:</strong> Essential for client-side routing, enabling seamless
                    navigation between different sections of this single-page application without full page reloads.</li>
                <li><strong>Local Storage API:</strong> For persisting user data like the current player's
                    information and all past quiz scores, ensuring that data is retained even if the browser
                    is closed and reopened. This makes the app feel robust and remembers your progress.</li>
            </ul>

            <h3>What I Learned During the Process:</h3>
            <p>
                Building this quiz app from scratch was an incredibly insightful journey. Here are some key takeaways:
            </p>
            <ul>
                <li><strong>React Component Architecture:</strong> Gaining a deeper understanding of how to
                    break down a complex UI into smaller, reusable components and manage their interactions.</li>
                <li><strong>State Management in React:</strong> Mastering `useState` and `useEffect` for
                    handling dynamic data and side effects, including timers and data fetching.</li>
                <li><strong>Custom Hooks:</strong> The `useLocalStorage` hook was a great exercise in creating
                    reusable logic for common patterns, making the code cleaner and more modular.</li>
                <li><strong>Client-Side Routing:</strong> Implementing `react-router-dom` effectively to create
                    a multi-page feel in a single-page application, including handling dynamic routes and 404 pages.</li>
                <li><strong>Responsive Design Principles:</strong> Applying CSS media queries and flexible
                    layouts (Flexbox) to ensure the application looks and functions well on various screen sizes.</li>
                <li><strong>Data Persistence:</strong> Understanding the practical application of browser
                    storage like `localStorage` to save user data and enhance the user experience.</li>
                <li><strong>Debugging and Problem-Solving:</strong> Sharpening skills in identifying and
                    resolving issues in a React environment, often involving inspecting component state and network requests.</li>
            </ul>

            <h3>Have Some Fun! (Coding Memes)</h3>
            <div className="meme-gallery">
                <img src={meme1} alt="Coding Meme: My code works, I don't know why" className="meme-img" />
                <img src={meme2} alt="Coding Meme: Debugging my own code" className="meme-img" />
                
            </div>
            <p>
                Thanks for checking out ThinkArena! I hope you enjoy playing as much as I enjoyed building it.
            </p>
        </div>
        
    );
};

export default AboutPage;