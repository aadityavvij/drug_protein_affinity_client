import React, { useState, useEffect } from "react";
import PredictorForm from "./components/PredictorForm";
import ResultDisplay from "./components/ResultDisplay";


const App = () => {
    const [affinity, setAffinity] = useState(null);

    const predictAffinity = async (drug, protein) => {
      try {
        const url = "http://localhost:8000/predict/";
        const payload = {
            drug: drug,
            protein: protein,
        };
        const res = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
    
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
    
          const data = await res.json();       
        setAffinity(data.affinity);
      } catch (error) {
        console.error("Error predicting affinity:", error);
        setAffinity(null);
      }
  };

  return (
    <div>
      <h1>Drug-Protein Affinity Predictor</h1>
      <PredictorForm onPredict={predictAffinity} />
      <ResultDisplay result={affinity} />
    </div>
  );
};

export default App;
