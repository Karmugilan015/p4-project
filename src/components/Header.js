import React from 'react';

const Header = ({ user, balance }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">Finance Manager</a>
      <span className="navbar-text">
        Hello, {user.name} | Balance: ₹{balance}
      </span>
    </nav>
  );
};

export default Header;
