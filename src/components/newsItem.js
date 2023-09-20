import React from 'react';
import '../App.css';

const NewsItem = () => {
    return (
        <div className="news">
            <p class="news-title">Title</p>
            <p class="news-description">Description</p>
            <img src="https://via.placeholder.com/150" alt="news" />
        </div>
    );
};

export default NewsItem;