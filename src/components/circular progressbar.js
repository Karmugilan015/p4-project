import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const CircularProgress = ({ transactions, budget }) => {
  const totalSpent = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  const percentage = Math.min((totalSpent / budget) * 100, 100);

  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage.toFixed(1)}%`}
      styles={buildStyles({
        textColor: '#000',
        pathColor: percentage > 80 ? 'red' : '#4caf50',
        trailColor: '#d6d6d6',
      })}
    />
  );
};

export default CircularProgress;
