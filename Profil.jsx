// App.js
import React, { useState } from 'react';
import axios from 'axios';

const Profil = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/register', { username, password, name });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred while registering the user');
    }
  };
  const handleCancel = () => {
    console.log("Operation canceled");
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleRegister}>
        Register
      </button>
      <button className="btn btn-primary" onClick={handleCancel}>
       Annuler
      </button>

      <p>{message}</p>
    </div>
  );
};

export default Profil;

