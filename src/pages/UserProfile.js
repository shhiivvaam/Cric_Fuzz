import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
    const { user } = useSelector(state => state.users);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Favorite Teams: {user.favoriteTeams.map(team => team.name).join(', ')}</p>
            <p>Favorite Players: {user.favoritePlayers.map(player => player.name).join(', ')}</p>
        </div>
    );
};

export default UserProfile;
