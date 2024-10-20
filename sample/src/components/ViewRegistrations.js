import React from 'react';

const ViewRegistrations = ({ onEdit, onDelete }) => {
  const [registrations, setRegistrations] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8080/api/registrations')
      .then((response) => response.json())
      .then((data) => setRegistrations(data))
      .catch((error) => console.error('Error fetching records:', error));
  }, []);

  return (
    <div>
      <h2>Registered Users</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.length > 0 ? (
            registrations.map((registration) => (
              <tr key={registration.id}>
                <td>{registration.id}</td>
                <td>{registration.name}</td>
                <td>{registration.email}</td>
                <td>{registration.dateOfBirth}</td>
                <td>
                  <button onClick={() => onEdit(registration)}>Update</button>
                  <button onClick={() => onDelete(registration)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewRegistrations;
