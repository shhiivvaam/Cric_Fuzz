import React, { useEffect, useState } from 'react';
import axios from '../utils/api';

const NewsFeed = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('/api/news');
                setNews(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {news.map(article => (
                <div key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                </div>
            ))}
        </div>
    );
};

export default NewsFeed;
