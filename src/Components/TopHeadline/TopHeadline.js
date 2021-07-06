import React, { useState } from 'react';
import { useEffect } from 'react';
import News from '../News/News';


const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=088078e105954af9ab4a482162bc9ba8';
        fetch(url)
        .then(res=> res.json())
        .then(data=> setArticles(data.articles))
    },[])
    return (
        <div>
            <h2>Top Headlines: {articles.length} </h2>
            {
                articles.map(article=> <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;