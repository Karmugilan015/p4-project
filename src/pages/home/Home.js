import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Finance Manager</h1>
      <p>Track your expenses, manage your budget, and analyze your finances.</p>
      
      <div className="button-group">
        <button onClick={() => navigate('/dashboard')} className="btn btn-primary">Go to Dashboard</button>
        <button onClick={() => navigate('/login')} className="btn btn-secondary">Login</button>
        <button onClick={() => navigate('/register')} className="btn btn-success">Register</button>
      </div>
    </div>
  );
};

export default Home;
