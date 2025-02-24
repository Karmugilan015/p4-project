import React from 'react';

const TableData = ({ transactions }) => {
  const categoryTotals = transactions.reduce((acc, tx) => {
    acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
    return acc;
  }, {});

  return (
    <div>
      <h3>Category-wise Spending</h3>
      <ul>
        {Object.entries(categoryTotals).map(([category, amount]) => (
          <li key={category}>
            {category}: ₹{amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableData;
