import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function App() {

  const [message, setMesage] = useState('Hi World');

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:3001/');
    setMesage(response.data.message);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button variant="contained" color="primary">
        {message}
      </Button>
    </div>
  );
}

export default App;