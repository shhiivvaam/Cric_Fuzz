import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import UserProfile from './pages/UserProfile';

const App = () => (
  <div>
    <Switch>
      <Route path="/" element={<HomePage />} exact />
      {/* <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<UserProfile />} /> */}
    </Switch>
  </div>
);

export default App;