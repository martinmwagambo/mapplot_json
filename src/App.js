import React, { useState, useEffect } from 'react';
import Map from './Map';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('data.json');
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Map</h1>
      <Map data={data} />
    </div>
  );
};

export default App;