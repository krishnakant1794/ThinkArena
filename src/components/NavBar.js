import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

        const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">ThinkArena</div>
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/setup" onClick={closeMenu}>Start Quiz</Link></li>
                <li><Link to="/scores" onClick={closeMenu}>Scores</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;