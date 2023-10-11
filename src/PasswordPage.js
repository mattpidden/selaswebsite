import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./PasswordPage.css";

const PasswordPage = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '103122') {
      navigate('/home');
    } else {
      alert('Incorrect Code. Sela the code is literally our anniversary ....');
    }
  };

  return (
    <div className='container'>
    <div className="password-page">
      <h1>Welcome to the Date Website</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your email code to retrive booking:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default PasswordPage;
