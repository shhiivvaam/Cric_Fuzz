const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
require('dotenv').config();

const matchRoutes = require('./routes/matchRoutes');
const playerRoutes = require('./routes/playerRoutes');
const teamRoutes = require('./routes/teamRoutes');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./utils/errorHandler');

const app = express();

// Middleware
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true,
    }
));
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use('/api/matches', matchRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(MONGO_URI)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(err => console.error(err));
