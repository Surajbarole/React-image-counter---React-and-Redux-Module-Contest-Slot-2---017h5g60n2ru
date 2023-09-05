import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
  const [photoData, setPhotoData] = useState(null);
  const [inputNumber, setInputNumber] = useState('');
  const [loading, setLoading] = useState(false);

   const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  };
   const fetchPhotoData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${inputNumber}`);
      const data = await response.json();
      setPhotoData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching photo data:', error);
      setLoading(false);
    }
  };

   useEffect(() => {
    if (inputNumber && !isNaN(inputNumber) && inputNumber >= 1 && inputNumber <= 5000) {
      fetchPhotoData();
    } else {
      setPhotoData(null);
    }
  }, [inputNumber]);
    return (
    <div className="App">
      <h1>Photo Viewer</h1>
      <input
        type="number"
        value={inputNumber}
        onChange={handleInputChange}
      />
      {loading ? (
        <Loader />
      ) : (
        photoData && (
          <PhotoFrame url={photoData.url} title={photoData.title} />
        )
      )}
    </div>
  );
};
export default App;
