import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams } from '../redux/teamSlice';

const TeamStats = () => {
    const dispatch = useDispatch();
    const { teams, status } = useSelector(state => state.teams);

    useEffect(() => {
        dispatch(fetchTeams());
    }, [dispatch]);

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Failed to load teams</div>;

    return (
        <div>
            {teams.map(team => (
                <div key={team._id}>
                    <h3>{team.name}</h3>
                    <p>Wins: {team.stats.wins}</p>
                    <p>Losses: {team.stats.losses}</p>
                    <p>Draws: {team.stats.draws}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamStats;
