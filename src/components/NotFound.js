import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; 
const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for does not exist.</p>
            <p>It might have been moved or deleted.</p>
            <Link to="/" className="home-link">Go to Home Page</Link>
        </div>
    );
};

export default NotFound;