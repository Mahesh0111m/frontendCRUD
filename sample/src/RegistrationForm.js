import React, { useState, useEffect } from 'react';

const RegistrationForm = ({ onSubmit, selectedRegistration, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
  });

  useEffect(() => {
    if (selectedRegistration) {
      setFormData({
        name: selectedRegistration.name,
        email: selectedRegistration.email,
        dateOfBirth: selectedRegistration.dateOfBirth,
      });
    }
  }, [selectedRegistration]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRegistration) {
      onUpdate(selectedRegistration.id, formData);
    } else {
      onSubmit(formData);
    }
    setFormData({ name: '', email: '', dateOfBirth: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">
        {selectedRegistration ? 'Update Registration' : 'Register'}
      </button>
    </form>
  );
};

export default RegistrationForm;
