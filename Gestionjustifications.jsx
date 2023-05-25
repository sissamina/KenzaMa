import React, { useState } from 'react';

const JustificationTable = () => {
  const [justifications, setJustifications] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    nom: '',
    prenom: '',
    dateEntre: '',
    dateSortie: '',
    heureEntre: '',
    heureSortie: '',
    type: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedJustifications = [...justifications];
      updatedJustifications[editIndex] = formData;
      setJustifications(updatedJustifications);
      setEditIndex(null);
    } else {
      setJustifications([...justifications, formData]);
    }
    setFormData({
      id: '',
      nom: '',
      prenom: '',
      dateEntre: '',
      dateSortie: '',
      heureEntre: '',
      heureSortie: '',
      type: '',
    });
  };

  const handleDelete = (index) => {
    const updatedJustifications = justifications.filter((_, i) => i !== index);
    setJustifications(updatedJustifications);
  };

  const handleEdit = (index) => {
    const justificationToEdit = justifications[index];
    setFormData(justificationToEdit);
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setFormData({
      id: '',
      nom: '',
      prenom: '',
      dateEntre: '',
      dateSortie: '',
      heureEntre: '',
      heureSortie: '',
      type: '',
    });
    setEditIndex(null);
  };

  return (
    <div>
        <h3 className='text-center'>Ajouter justification</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id" className="col-sm-2 col-form-label">Identifiant :</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nom" className="col-sm-2 col-form-label">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="prenom" className="col-sm-2 col-form-label">Prénom :</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dateEntre" className="col-sm-2 col-form-label">Date d'entrée :</label>
          <input
            type="date"
            id="dateEntre"
            name="dateEntre"
            value={formData.dateEntre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dateSortie" className="col-sm-2 col-form-label">Date de sortie :</label>
          <input
            type="date"
            id="dateSortie"
            name="dateSortie"
            value={formData.dateSortie}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="heureEntre"className="col-sm-2 col-form-label">Heure d'entrée :</label>
          <input
            type="time"
            id="heureEntre"
            name="heureEntre"
            value={formData.heureEntre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="heureSortie"className="col-sm-2 col-form-label">Heure de sortie :</label>
          <input
            type="time"
            id="heureSortie"
            name="heureSortie"
            value={formData.heureSortie}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="type" className="col-sm-2 col-form-label">Type de justification :</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="">Choose...</option>
          <option value="absence-autorisé">Absence-autorisé</option>
          <option value="retard">Retard</option>
          <option value="absence-non-autorisé">Absence-non-autorisé</option>
          <option value="congé de récuperation">congé de récuperation</option>
          <option value="congé anuelle">Congé anuelle</option>
          <option value="maladie">Maladie</option>
          <option value="bon de sorti">Bon de sorti</option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            {editIndex !== null ? 'Modifier' : 'Ajouter'}
          </button>
          {editIndex !== null && (
            <button type="button" className='btn bg-danger' onClick={handleCancelEdit}>
              Annuler
            </button>
          )}
        </div>
      </form>
      <table className='table'>
        <thead>
          <tr className='bg-primary'>
            <th>Id</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Date d'entrée</th>
            <th>Date de sortie</th>
            <th>Heure d'entrée</th>
            <th>Heure de sortie</th>
            <th>Type de justification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {justifications.map((justification, index) => (
            <tr key={index}>
              <td>{justification.id}</td>
              <td>{justification.nom}</td>
              <td>{justification.prenom}</td>
              <td>{justification.dateEntre}</td>
              <td>{justification.dateSortie}</td>
              <td>{justification.heureEntre}</td>
              <td>{justification.heureSortie}</td>
              <td>{justification.type}</td>
              <td>
                <button  className="btn btn-sm btn-warning" onClick={() => handleEdit(index)}>Modifier</button>
                <button  className="btn btn-sm btn-danger"  onClick={() => handleDelete(index)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JustificationTable;
