import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Header from "./components/Header";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header Section */}
        <Header />
        
        {/* Main Content */}
        <div className="content">
          <img src={logo} alt="Finance Manager Logo" className="logo" />
          <h1>Finance Manager</h1>
          <p>Track your expenses, manage your budget, and stay in control.</p>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
