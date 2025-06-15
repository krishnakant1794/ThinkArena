import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
            const [storedValue, setStoredValue] = useState(() => {
        try {
                        const item = window.localStorage.getItem(key);
                        return item ? JSON.parse(item) : initialValue;
        } catch (error) {
                        console.error("Error reading from localStorage:", error);
            return initialValue;
        }
    });

        useEffect(() => {
        try {
                        const valueToStore =
                typeof storedValue === 'function'
                    ? storedValue(storedValue)
                    : storedValue;
                        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error("Error writing to localStorage:", error);
        }
    }, [key, storedValue]); 
    return [storedValue, setStoredValue];
}

export { useLocalStorage };