import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [user_name, setUserName] = useState('');
  const [user_surname, setUserSurname] = useState('');
  const [user_number, setUserNumber] = useState('');
  const [user_password, setUserPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', {
        user_name,
        user_surname,
        user_number,
        user_password,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={user_name}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surname"
          value={user_surname}
          onChange={(e) => setUserSurname(e.target.value)}
        />
        <input
          type="text"
          placeholder="User Number"
          value={user_number}
          onChange={(e) => setUserNumber(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={user_password}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;