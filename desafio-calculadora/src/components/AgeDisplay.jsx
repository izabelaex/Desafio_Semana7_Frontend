import React from "react";

const AgeDisplay = ({ age }) => {
  return (
    <div>
      <h2>Resultado:</h2>
      <p>{age.years} anos, {age.months} meses e {age.days} dias.</p>
    </div>
  );
};

export default AgeDisplay;
