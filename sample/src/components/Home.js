import React from 'react';

const Home = ({ switchView }) => {
  return (
    <div>
      <h1>Welcome to Registration CRUD</h1>
      <button onClick={() => switchView('create')}>Create</button>
      <button onClick={() => switchView('read')}>Read</button>
      <button onClick={() => switchView('update')}>Update</button>
      <button onClick={() => switchView('delete')}>Delete</button>
    </div>
  );
};

export default Home;
