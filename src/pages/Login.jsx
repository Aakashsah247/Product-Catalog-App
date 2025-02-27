import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateUser, getUsers } from '../services/auth';
import '../styles/Login_styles.css';

const Login = ({ setAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    const user = validateUser(email, password);
    if (user) {
      setAuthenticated(true);
      navigate('/products');
    } else {
      const users = getUsers();
      const emailExists = users.some(u => u.email === email);
      setError(emailExists ? 'Invalid password' : 'Account not found');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="forgot-password">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="show-password-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="forgot-password">
        Forgot password?{' '}
        <a href="/reset-password" onClick={(e) => {
          e.preventDefault();
          navigate('/reset-password');
        }}>
          Reset here
        </a>
      </p>
      <p style={{fontSize:'26px'}}>
        Don't have an account?{' '}
        <a href="/register" onClick={(e) => {
          e.preventDefault();
          navigate('/register');
        }}>
          Signup
        </a>
      </p>
    </div>
  );
};

export default Login;