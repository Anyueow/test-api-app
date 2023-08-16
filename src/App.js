// src/App.js

import React, { useState } from 'react';
import UserForm from './UserForm';
import ThankYou from './ThankYou';

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleUserSubmit = async (userData) => {
    const response = await fetch('http://localhost:5001/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    const data = await response.json();
    if (data && data._id) {  // If the user was saved successfully
      setSubmitted(true);
    }
  };


  return (
      <div className="App">
        {submitted ? <ThankYou /> : <UserForm onUserSubmit={handleUserSubmit} />}
      </div>
  );
}

export default App;
