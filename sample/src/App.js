import React, { useState } from 'react';
import CreateRegistration from './components/CreateRegistration';
import ViewRegistrations from './components/ViewRegistrations';
import UpdateRegistration from './components/UpdateRegistration';
import DeleteRegistration from './components/DeleteRegistration';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedRegistration, setSelectedRegistration] = useState(null);

  const handleEdit = (registration) => {
    setSelectedRegistration(registration);
    setCurrentView('update');
  };

  const handleDelete = (registration) => {
    setSelectedRegistration(registration);
    setCurrentView('delete');
  };

  const renderView = () => {
    switch (currentView) {
      case 'create':
        return <CreateRegistration onRecordCreated={() => setCurrentView('view')} />;
      case 'view':
        return <ViewRegistrations onEdit={handleEdit} onDelete={handleDelete} />;
      case 'update':
        return (
          <UpdateRegistration
            registration={selectedRegistration}
            onRecordUpdated={() => {
              setCurrentView('view');
              setSelectedRegistration(null);
            }}
          />
        );
      case 'delete':
        return (
          <DeleteRegistration
            registration={selectedRegistration}
            onRecordDeleted={() => {
              setCurrentView('view');
              setSelectedRegistration(null);
            }}
          />
        );
      default:
        return (
          <div>
            <button onClick={() => setCurrentView('create')}>Create</button>
            <button onClick={() => setCurrentView('view')}>View</button>
          </div>
        );
    }
  };

  return (
    <div>
      <h1>Registration System</h1>
      {renderView()}
    </div>
  );
}

export default App;
