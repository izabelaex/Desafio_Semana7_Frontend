import React, { useState } from "react";
import InputField from "./components/InputField";
import SubmitButton from "./components/SubmitButton";
import AgeDisplay from "./components/AgeDisplay";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");
  const handleSubmit = () => {
   const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    if (!day || !month || !year) {
      setError("Todos os campos devem ser preenchidos.");
      setAge(null);
      return;
    }
    if (
      birthDate.getDate() !== Number(day) || 
      birthDate.getMonth() + 1 !== Number(month) || 
      birthDate.getFullYear() !== Number(year)
    ) {
      setError("Data inválida. Verifique se o dia existe no mês escolhido.");
      setAge(null);
      return;
    }
    if (isNaN(birthDate.getTime()) || day < 1 || day > 31 || month < 1 || month > 12) {
      setError("Data inválida.");
      setAge(null);
      return;
    }

    if (birthDate > today) {
      setError("A data não pode estar no futuro.");
      setAge(null);
      return;
    }

    const diff = new Date(today - birthDate);
    setAge({
      years: diff.getUTCFullYear() - 1970,
      months: diff.getUTCMonth(),
      days: diff.getUTCDate() - 1
    });

    setError("");
  };

  return (
    <div>
      <h1>Calculadora de Idade</h1>
      <InputField label="Dia" value={day} setValue={setDay} />
      <InputField label="Mês" value={month} setValue={setMonth} />
      <InputField label="Ano" value={year} setValue={setYear} />
      <SubmitButton onClick={handleSubmit} />
      {error && <ErrorMessage message={error} />}
      {age && <AgeDisplay age={age} />}
    </div>
  );
};

export default App;