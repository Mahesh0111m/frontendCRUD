import React, { useState } from 'react';

const CreateRegistration = ({ onRecordCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/registrations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(() => {
        setFormData({ name: '', email: '', dateOfBirth: '' });
        onRecordCreated();
      })
      .catch(error => console.error('Error creating record:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Create Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateRegistration;
