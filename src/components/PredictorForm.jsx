import React, { useState } from "react";

const PredictorForm = ({ onPredict }) => {
  const [drug, setDrug] = useState("");
  const [protein, setProtein] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (drug && protein) {
      onPredict(drug, protein);
    } else {
      alert("Please enter both drug and protein sequences.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Drug Sequence:</label>
        <textarea 
          value={drug} 
          onChange={(e) => setDrug(e.target.value)} 
          placeholder="Enter drug sequence..." 
          required
        />
      </div>
      <div>
        <label>Protein Sequence:</label>
        <textarea 
          value={protein} 
          onChange={(e) => setProtein(e.target.value)} 
          placeholder="Enter protein sequence..." 
          required
        />
      </div>
      <button type="submit">Predict Affinity</button>
    </form>
  );
};

export default PredictorForm;
