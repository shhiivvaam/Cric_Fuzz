import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches } from '../redux/slices/matchSlice';

const MatchDetail = () => {
    const dispatch = useDispatch();
    const { matches, status } = useSelector(state => state.matches);

    useEffect(() => {
        dispatch(fetchMatches());
    }, [dispatch]);

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Failed to load matches</div>;

    return (
        <div>
            {matches.map(match => (
                <div key={match._id}>
                    <h3>{match.teams.join(' vs ')}</h3>
                    <p>{match.score}</p>
                    <p>{new Date(match.date).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};

export default MatchDetail;