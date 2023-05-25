import React, { useState } from 'react';
import axios from 'axios';

function Data() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      console.log(response.data);
      // Effectuer des actions supplémentaires après l'importation réussie
    })
    .catch((error) => {
      console.error(error);
      // Gérer les erreurs d'importation
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={uploadFile}>Importer</button>
    </div>
  );
}

export default Data;
