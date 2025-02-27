import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, getUsers } from '../services/auth';
import '../styles/RegisterStyle.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (getUsers().some(u => u.email === formData.email)) {
      setError('Email already registered');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    registerUser(formData);
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h2>Create Account</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p style={{fontSize:'26px'}}>
        Already have an account?{' '}
        <a href="/login" onClick={(e) => {
          e.preventDefault();
          navigate('/login');
        }}>
          Login here
        </a>
      </p>
    </div>
  );
};

export default Register;