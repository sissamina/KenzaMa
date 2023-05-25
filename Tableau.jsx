import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Tableau = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col" colSpan="2">Matin</th>
          <th scope="col" colSpan="2">Après-midi</th>
        </tr>
        <tr>
          <th scope="col">Employé</th>
          <th scope="col">Heure d'entrée</th>
          <th scope="col">Heure de sortie</th>
          <th scope="col">Heure d'entrée</th>
          <th scope="col">Heure de sortie</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Employé 1</th>
          <td>8h00</td>
          <td>12h00</td>
          <td>13h30</td>
          <td>17h30</td>
        </tr>
        <tr>
          <th scope="row">Employé 2</th>
          <td>8h15</td>
          <td>12h15</td>
          <td>14h00</td>
          <td>18h00</td>
        </tr>
        {/* Ajoutez ici d'autres lignes pour les autres employés */}
      </tbody>
    </table>
  );
}

export default Tableau;
