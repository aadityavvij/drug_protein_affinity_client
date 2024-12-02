import React from "react";

const ResultDisplay = ({ result }) => {
  return (
    <div>
      <h1>Prediction Result</h1>
      {result !== null ? (
        <p>The predicted affinity is: <strong>{result.toFixed(4)}</strong></p>
      ) : (
        <p>No prediction yet. Submit a query to see results.</p>
      )}
    </div>
  );
};

export default ResultDisplay;
