import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import upload from '../images/upload.png'

const Prediction = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null); 
  const [loading, setLoading] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*', 
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setImage(URL.createObjectURL(file));
      setPrediction(null);
      handlePrediction(file);
    },
  });

  const handlePrediction = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    setLoading(true);

    try {
      const response = await fetch('https://wildlens-t1wk.onrender.com/api/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setPrediction(data.animal);
      } else {
        console.error('Prediction request failed');
        setPrediction('Error: Failed to get prediction');
      }
    } catch (error) {
      console.error('Error during the fetch operation', error);
      setPrediction('Error: Failed to get prediction');
    } finally {
      setLoading(false);
    }
  };

  const handleNewUpload = () => {
    setImage(null);
    setPrediction(null);
    setLoading(false);
    window.location.reload();
  };

  return (
    <div className="image-uploader">
      {!image && (
        <div
          {...getRootProps()}
          style={{
            border: '2px dashed white',
            borderRadius: '30px',
            margin: '50px',
            padding: '30px',
            width: '300px',
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: 'black',
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8),rgba(100, 100, 100,0.4))'
          }}
        >
          <input {...getInputProps()} />
          <img src={upload} height="80px" alt="" />
          <br />
          Drag & drop an image, or click to select one
        </div>
      )}

      {image && (
        <div style={{ margin: '10px'}}>
          <h2>Uploaded Image:</h2>
          <img src={image} alt="uploaded" style={{ width: '100%', maxWidth: '300px', border: '1px solid white', borderRadius: '30px'}} />
        </div>
      )}

      {loading && (
        <div style={{ margin: '10px' }}>
          <p>Loading prediction...</p>
        </div>
      )}

      {prediction && !loading && (
        <div style={{ margin: '10px' }}>
          <h2>Animal Predicted as : {prediction}</h2>
          <h2></h2>
        </div>
      )}

      {prediction && !loading && (
        <div>
          <button onClick={handleNewUpload} style={{color:'white', margin: '30px', width: '200px', cursor: 'pointer', backgroundColor: 'black',backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8),rgba(100, 100, 100,0.4))',border: '2px solid white', borderRadius: '30px' }}>
            <h2>Upload New</h2>
          </button>
        </div>
      )}
    </div>
  );
};
export default Prediction;