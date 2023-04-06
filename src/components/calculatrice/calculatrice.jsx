import React, { useState } from 'react';

const Calculatrice = () => {
  const [nombre1, setNombre1] = useState("");
  const [nombre2, setNombre2] = useState("");
  const [operation, setOperation] = useState("+");
  const [resultat, setResultat] = useState("");

  function calculer() {
    let resultatCalcul = 0;
    switch(operation) {
      case "+":
        resultatCalcul = parseFloat(nombre1) + parseFloat(nombre2);
        break;
      case "-":
        resultatCalcul = parseFloat(nombre1) - parseFloat(nombre2);
        break;
      case "*":
        resultatCalcul = parseFloat(nombre1) * parseFloat(nombre2);
        break;
      case "/":
        resultatCalcul = parseFloat(nombre1) / parseFloat(nombre2);
        break;
      default:
        setResultat("Erreur : opération invalide");
        return;
    }
    setResultat(resultatCalcul.toString());
  }

  return (
    <form>
      <label htmlFor="nombre1">Nombre 1 :</label>
      <input
        id="nombre1"
        type="text"
        value={nombre1}
        onChange={(e) => setNombre1(e.target.value)}
      />
      <br />
      <label htmlFor="nombre2">Nombre 2 :</label>
      <input
        id="nombre2"
        type="text"
        value={nombre2}
        onChange={(e) => setNombre2(e.target.value)}
      />
      <br />
      <label htmlFor="operation">Opération :</label>
      <select id="operation" onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <br />
      <button onClick={calculer}>Calculer</button>
      <br />
      <label>Résultat :</label>
      <input type="text" value={resultat} readOnly />
    </form>
  );
}

export default Calculatrice;
