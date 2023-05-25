import React from 'react';
import axios from 'axios';

const LogoutButton = () => {
  const handleLogout = () => {
    axios.get('/logout')
      .then(response => {
        // Affichez le message de confirmation de déconnexion
        console.log(response.data.message);

        // Redirigez l'utilisateur vers la page de connexion
        window.location.href = '/login';
      })
      .catch(error => {
        // Gérez les erreurs de déconnexion
        console.error('Erreur lors de la déconnexion :', error);
      });
  };

  return (
    <button onClick={handleLogout}>Déconnexion</button>
  );
};

export default LogoutButton;
