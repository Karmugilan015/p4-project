import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const LineProgressBar = ({ transactions, budget }) => {
  const totalSpent = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  const percentage = Math.min((totalSpent / budget) * 100, 100); // Cap at 100%

  return (
    <div>
      <h4>Budget Usage</h4>
      <ProgressBar now={percentage} label={`${percentage.toFixed(1)}%`} variant={percentage > 80 ? "danger" : "success"} />
      <p>₹{totalSpent} spent out of ₹{budget}</p>
    </div>
  );
};

export default LineProgressBar;
