import React from 'react';
import { Line } from 'react-chartjs-2';

const Analytics = ({ transactions }) => {
  // Group transactions by date and sum their amounts
  const aggregatedData = transactions.reduce((acc, tx) => {
    acc[tx.date] = (acc[tx.date] || 0) + tx.amount;
    return acc;
  }, {});

  const dates = Object.keys(aggregatedData);
  const amounts = Object.values(aggregatedData);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Spending Over Time',
        data: amounts,
        borderColor: 'red',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default Analytics;
