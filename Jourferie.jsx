import React, { useState } from 'react';

const Jourferie = () => {
  const [joursFeries, setJoursFeries] = useState([]);
  const [formData, setFormData] = useState({
    dateDebut: '',
    dateFin: '',
    nomJour: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedJoursFeries = [...joursFeries];
      updatedJoursFeries[editIndex] = formData;
      setJoursFeries(updatedJoursFeries);
      setEditIndex(null);
    } else {
      setJoursFeries([...joursFeries, formData]);
    }
    setFormData({ dateDebut: '', dateFin: '', nomJour: '' });
  };

  const handleDelete = (index) => {
    const updatedJoursFeries = joursFeries.filter((_, i) => i !== index);
    setJoursFeries(updatedJoursFeries);
  };

  const handleEdit = (index) => {
    const jourFerieToEdit = joursFeries[index];
    setFormData(jourFerieToEdit);
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setFormData({ dateDebut: '', dateFin: '', nomJour: '' });
    setEditIndex(null);
  };

  return (
    <div>
      <h3 className='text-center '>Ajouter jour férie</h3>
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="dateDebut" className="col-sm-2 col-form-label">Date de début :</label>
          <input
            type="date"
            id="dateDebut"
            name="dateDebut"
            value={formData.dateDebut}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label htmlFor="dateFin" className="col-sm-2 col-form-label">Date de fin :</label>
          <input
            type="date"
            id="dateFin"
            name="dateFin"
            value={formData.dateFin}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nomJour" className="col-sm-2 col-form-label">Nom du jour :</label>
          <input
            type="text"
            id="nomJour"
            name="nomJour"
            value={formData.nomJour}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary d-grid gap-2 col-2 mx-auto">{editIndex !== null ? 'Modifier' : 'Ajouter'}</button>
          {editIndex !== null && (
            <button type="button" className='btn bg-danger' onClick={handleCancelEdit}>
              Annuler
            </button>
          )}
        </div>
      </form>
      <table className='table '>
        <thead>
          <tr className='bg-primary'>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Nom du jour</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {joursFeries.map((jourFerie, index) => (
            <tr key={index}>
              <td>{jourFerie.dateDebut}</td>
              <td>{jourFerie.dateFin}</td>
              <td>{jourFerie.nomJour}</td>
              <td>
                <button className="btn btn-sm btn-warning" onClick={() => handleEdit(index)}>Modifier</button>
                <button  className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>Supprimer</button>
              </td>
            </tr>
                ))}
                </tbody>
              </table>
            </div>
          );
        };
        export default Jourferie;
