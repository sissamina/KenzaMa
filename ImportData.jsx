import React, { useState } from 'react';
import axios from 'axios';

const ImportData = () => {
  const [accessFile, setAccessFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setAccessFile(e.target.files[0]);
  };

  const handleImport = async () => {
    try {
      const formData = new FormData();
      formData.append('accessFile', accessFile);

      const response = await axios.post('/api/import', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while importing data');
    }
  };

  return (
    <div className="container">
      <h2>Import Data</h2>
      <div className="mb-3">
        <label htmlFor="accessFile" className="form-label">
          Select Access File
        </label>
        <input
          type="file"
          className="form-control"
          id="accessFile"
          onChange={handleFileChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleImport}>
        Import
      </button>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default ImportData;
