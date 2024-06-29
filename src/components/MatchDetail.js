import React, { useEffect, useState } from 'react';
import axios from '../utils/api';

const BASE_URL = "http://localhost:5000"

const MatchDetails = () => {
    const [matches, setMatches] = useState([]);
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/live/matches`);
                setMatches(response.data);
                setStatus('success');
            } catch (error) {
                console.error('Failed to fetch matches:', error);
                setStatus('failed');
            }
        };

        fetchMatches();
    }, []);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Failed to load matches.</div>;
    }

    return (
        <div>
            <h1>Match Details</h1>
            <ul>
                {matches.map((match) => (
                    <li key={match.id}>
                        <h2>{match.team1} vs {match.team2}</h2>
                        <p>{match.score}</p>
                        <p><strong>Date:</strong> {new Date(match.date).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatchDetails;


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMatches } from '../redux/slices/matchSlice';


// const MatchDetail = () => {
//     const dispatch = useDispatch();
//     const { matches, status } = useSelector(state => state.matches);

//     useEffect(() => {
//         dispatch(fetchMatches());
//     }, [dispatch]);

//     if (status === 'loading') return <div>Loading...</div>;
//     if (status === 'failed') return <div>Failed to load matches</div>;

//     return (
//         <div>
//             {matches.map(match => (
//                 <div key={match._id}>
//                     <h3>{match.teams.join(' vs ')}</h3>
//                     <p>{match.score}</p>
//                     <p>{new Date(match.date).toLocaleString()}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default MatchDetail;