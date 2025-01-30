import React from "react";

const InputField = ({ label, value, setValue }) => {
  return (
    <div>
      <label>{label}:</label>
      <input 
        type="number" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        min="1"
      />
    </div>
  );
};

export default InputField;
