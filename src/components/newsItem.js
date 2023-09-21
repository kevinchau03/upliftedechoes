import React from 'react';
import '../App.css';

const NewsItem = (props) => {
    return (
        <div className="news">
            <p className="news-title">{props.title}</p>
            <p className="news-description">{props.desc}</p>
        </div>
    );
};

export default NewsItem;