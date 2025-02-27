import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>React + Django + MongoDB App</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;

