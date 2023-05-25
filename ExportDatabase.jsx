/*import React, { useState } from 'react';
import axios from 'axios';

const ExportDatabase = () => {
  const [exportStatus, setExportStatus] = useState('');

  const handleExport = async () => {
    try {
      const response = await axios.get('/api/export');
      const data = response.data;
      
      // Téléchargement du fichier
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'database.json');
      link.click();
      
      setExportStatus('Export successful');
    } catch (error) {
      console.error(error);
      setExportStatus('Export failed');
    }
  };

  return (
    <div>
      <button onClick={handleExport}>Export Database</button>
      <p>{exportStatus}</p>
    </div>
  );
};

export default ExportDatabase;*/

import React, { useState } from 'react';
import axios from 'axios';

const ExportDatabase = () => {
  const [dbName, setDbName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleDbNameChange = (e) => {
    setDbName(e.target.value);
  };

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleExportAccess = () => {
    if (dbName && selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('dbName', dbName);

      axios.post('/export/access', formData)
        .then((response) => {
          setMessage(response.data.message);
        })
        .catch((error) => {
          console.error(error);
          setMessage('Export failed');
        });
    }
  };

  const handleExportBson = () => {
    if (dbName && selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('dbName', dbName);

      axios.post('/export/bson', formData)
        .then((response) => {
          setMessage(response.data.message);
        })
        .catch((error) => {
          console.error(error);
          setMessage('Export failed');
        });
    }
  };

  return (
    <div>
      <h2>Export Database</h2>
      <label htmlFor="dbName">Database Name:</label>
      <input type="text" id="dbName" value={dbName} onChange={handleDbNameChange} />
      <br />
      <label htmlFor="file">Select File:</label>
      <input type="file" id="file" onChange={handleFileSelect} />
      <br />
      <button onClick={handleExportAccess}>Export to Access</button>
      <button onClick={handleExportBson}>Export to BSON</button>
      <p>{message}</p>
    </div>
  );
};

export default ExportDatabase;
