import React from 'react';

const DeleteRegistration = ({ registration, onRecordDeleted }) => {
  const handleDelete = () => {
    fetch(`http://localhost:8080/api/registrations/${registration.id}`, {
      method: 'DELETE',
    })
      .then(() => onRecordDeleted())
      .catch(error => console.error('Error deleting record:', error));
  };

  return (
    <div>
      <h2>Delete Registration</h2>
      <p>Are you sure you want to delete {registration.name}?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteRegistration;
