import React from 'react';

const Spinner = ({ message = "Loading..." }) => {
  return (
    <div className="text-center">
      <div className="spinner-border text-primary" role="status"></div>
      <p>{message}</p>
    </div>
  );
};

export default Spinner;
