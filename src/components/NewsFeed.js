import React, { useEffect, useState } from 'react';
import axios from '../utils/api';

const BASE_URL = "http://localhost:5000"

const NewsFeed = () => {
    const [news, setNews] = useState([]);
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/live/news`);
                setNews(response.data);
                setStatus('success');
            } catch (error) {
                console.error('Failed to fetch news:', error);
                setStatus('failed');
            }
        };

        fetchNews();
    }, []);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Failed to load news.</div>;
    }

    return (
        <div>
            <h1>News Feed</h1>
            <ul>
                {news.map((article) => (
                    <li key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                        <p><strong>Author:</strong> {article.author}</p>
                        <p><strong>Date:</strong> {new Date(article.date).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsFeed;



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from '../utils/api';
// import { newsFetched } from '../redux/slices/newsSlice';

// const BASE_URL = "http://localhost:5000"

// const NewsFeed = () => {
//     const dispatch = useDispatch();
//     const news = useSelector((state) => state.news.news);
//     const status = useSelector((state) => state.news.status);

//     useEffect(() => {
//         const fetchNews = async () => {
//             try {
//                 const response = await axios.get(`${BASE_URL}/api/news`);
//                 dispatch(newsFetched(response.data));
//             } catch (error) {
//                 console.error('Failed to fetch news:', error);
//             }
//         };

//         fetchNews();
//     }, [dispatch]);

//     if (status === 'loading') {
//         return <div>Loading...</div>;
//     }

//     if (status === 'failed') {
//         return <div>Failed to load news.</div>;
//     }

//     return (
//         <div>
//             <h1>News Feed</h1>
//             <ul>
//                 {news.map((article) => (
//                     <li key={article._id}>
//                         <h2>{article.title}</h2>
//                         <p>{article.content}</p>
//                         <p><strong>Author:</strong> {article.author}</p>
//                         <p><strong>Date:</strong> {new Date(article.date).toLocaleString()}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default NewsFeed;
