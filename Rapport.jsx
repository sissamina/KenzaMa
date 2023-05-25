import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const ReportTable = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reportData, setReportData] = useState([]);

  const handleSearch = () => {
    // Effectuez une requête à votre API Express.js pour récupérer les données de rapport
    // en fonction de startDate et endDate
    // Mettez à jour l'état reportData avec les données récupérées
  };

  const handleExport = () => {
    // Effectuez une requête à votre API Express.js pour exporter les données de la base de données
    // MongoDB au format Excel
    // Gérez la réponse pour télécharger le fichier Excel
  };

  return (
    <div>
      <h2>Rapport de Pointage</h2>
      <div className="mb-3">
        <label htmlFor="startDate">Date de Début:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="endDate">Date de Fin:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <Button variant="primary" onClick={handleSearch}>
        Rechercher
      </Button>
      <Button variant="success" className="ml-2" onClick={handleExport}>
        Exporter en Excel
      </Button>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Identifiant</th>
            <th>Nom</th>
            <th>Pointage</th>
            <th>Matin</th>
            <th>Après-midi</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.nom}</td>
              <td>
                <div>
                  <span>{employee.jour}</span>
                  <span>{employee.date}</span>
                </div>
              </td>
              <td>
                <div>
                  <span>{employee.heureEntreeMatin}</span>
                  <span>{employee.heureSortieMatin}</span>
                </div>
              </td>
              <td>
                <div>
                  <span>{employee.heureEntreeApresMidi}</span>
                  <span>{employee.heureSortieApresMidi}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReportTable;
