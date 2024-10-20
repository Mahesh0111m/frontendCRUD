import React, { useState } from 'react';

const UpdateRegistration = ({ registration, onRecordUpdated }) => {
  const [formData, setFormData] = useState({ ...registration });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/registrations/${registration.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(() => onRecordUpdated())
      .catch(error => console.error('Error updating record:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Update Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateRegistration;
