import React, { useState } from 'react';
import '../App.css';

const apiKey = process.env.REACT_APP_API_KEY;
console.log(apiKey);

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(null);

    async function getNews() {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&q=${searchTerm}&apiKey=${apiKey}`);
            const data = await response.json();
            setSearchResults(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        getNews();
    }

    return (
        <div className="search">
            <form onSubmit={handleSearch}>
                <input
                    className="bar"
                    type="text"
                    placeholder="Search for a topic"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {/* Display search results if available */}
            {searchResults && (
                <div className="search-results">
                    {/* Render search results here */}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
