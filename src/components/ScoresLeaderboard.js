import React, { useState, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import './ScoresLeaderboard.css'; 
const ScoresLeaderboard = () => {
        const [pastScores] = useLocalStorage('pastScores', []);
    const [sortBy, setSortBy] = useState('date');     const [sortOrder, setSortOrder] = useState('desc'); 
        const sortedScores = useMemo(() => {
        if (!pastScores || pastScores.length === 0) return [];

        const sorted = [...pastScores].sort((a, b) => {
            let valA, valB;

            switch (sortBy) {
                case 'score':
                    valA = a.score;
                    valB = b.score;
                    break;
                case 'time':
                    valA = a.totalTimeTaken;
                    valB = b.totalTimeTaken;
                    break;
                case 'date':
                    valA = new Date(a.date).getTime();                     valB = new Date(b.date).getTime();
                    break;
                default:
                                        valA = new Date(a.date).getTime();
                    valB = new Date(b.date).getTime();
                    break;
            }

            if (sortOrder === 'desc') {
                return valB - valA;             } else {
                return valA - valB;             }
        });
        return sorted;
    }, [pastScores, sortBy, sortOrder]);

        const toggleSortOrder = (column) => {
        if (sortBy === column) {
                        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
                        setSortBy(column);
            setSortOrder('desc');
        }
    };

    return (
        <div className="leaderboard-container">
            <h2>Previous Quiz Scores</h2>
            {pastScores.length === 0 ? (
                <p>No quiz scores recorded yet. Complete a quiz to see your results here!</p>
            ) : (
                <div className="table-responsive"> {/* Add a wrapper for responsiveness */}
                    <table>
                        <thead>
                            <tr>
                                <th onClick={() => toggleSortOrder('playerName')}>Player Name</th>
                                <th onClick={() => toggleSortOrder('score')}>
                                    Score {sortBy === 'score' && (sortOrder === 'desc' ? '🔽' : '🔼')}
                                </th>
                                <th onClick={() => toggleSortOrder('time')}>
                                    Time Taken {sortBy === 'time' && (sortOrder === 'desc' ? '🔽' : '🔼')}
                                </th>
                                <th onClick={() => toggleSortOrder('date')}>
                                    Date {sortBy === 'date' && (sortOrder === 'desc' ? '🔽' : '🔼')}
                                </th>
                                <th>Category</th>
                                <th>Difficulty</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedScores.map((attempt, index) => (
                                <tr key={index}> 
                                    <td>{attempt.playerName}</td>
                                    <td>{attempt.score} / {attempt.questionTimings ? attempt.questionTimings.length : 'N/A'}</td>
                                    <td>{attempt.totalTimeTaken}s</td>
                                    <td>{new Date(attempt.date).toLocaleString()}</td> 
                                    <td>{attempt.category || 'N/A'}</td> 
                                    <td>{attempt.difficulty || 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ScoresLeaderboard;