import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayers } from '../redux/playerSlice';

const PlayerProfile = () => {
    const dispatch = useDispatch();
    const { players, status } = useSelector(state => state.players);

    useEffect(() => {
        dispatch(fetchPlayers());
    }, [dispatch]);

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Failed to load players</div>;

    return (
        <div>
            {players.map(player => (
                <div key={player._id}>
                    <h3>{player.name}</h3>
                    <p>Team: {player.team.name}</p>
                    <p>Position: {player.position}</p>
                    <p>Stats: {player.stats}</p>
                </div>
            ))}
        </div>
    );
};

export default PlayerProfile;
