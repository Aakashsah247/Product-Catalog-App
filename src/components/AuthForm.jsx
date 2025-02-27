// src/components/AuthForm.js (common form component)
import React from 'react';

const AuthForm = ({ title, fields, onSubmit, buttonText, message }) => {
  return (
    <div className="auth-container">
      <h2>{title}</h2>
      {message && <div className={`message ${message.type}`}>{message.text}</div>}
      <form onSubmit={onSubmit}>
        {fields.map((field) => (
          <div key={field.name} className="form-group">
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              required={field.required}
              onChange={field.onChange}
            />
          </div>
        ))}
        <button type="submit" className="auth-button">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;