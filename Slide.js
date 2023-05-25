import { Slide } from '@mui/material';
import React, { useState } from 'react';

function Slide({ collectionName }) {
  
  const collectionRef = collectionName ? db.collection(collectionName) : null;
  if (collectionRef) {
    const [sliderOpen, setSliderOpen] = useState(false);

  function handleSliderOpen() {
    setSliderOpen(true);
  }

  function handleSliderClose() {
    setSliderOpen(false);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Mon application</a>
      <button className="navbar-toggler" type="button" onClick={handleSliderOpen}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`sliderbar ${sliderOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={handleSliderClose}>
          <span aria-hidden="true">&times;</span>
        </button>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/employes">Gestion des employés</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/justifications">Gestion des justifications</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/joursferies">Gestion des jours fériés</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/rapports">Rapports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/feuillesdepresence">Feuilles de présence</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/importer">Importer</a>
          </li>
        </ul>
      </div>
      <div className="navbar-nav ml-auto">
        <a className="nav-link" href="/profil">Profil</a>
        <a className="nav-link" href="/deconnexion">Déconnexion</a>
      </div>
    </nav>
  );
  }
}

export default Slide;
