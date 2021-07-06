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
            <h1 style={{ 
                textAlign: 'center',
                margin: '1em',
                }}>
            
            Top Headlines 
            </h1>
            <div style = {{ 
                display: 'grid',
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: '0.5rem',
                justifyContent: 'center'
                }}>
                {
                 articles.map(article=> <News article={article}></News>)
                }
            </div>
            
        </div>
    );
};

export default TopHeadline;