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
      const response = await fetch('https://wildlens-t1wk.onrender.com/predict', {
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
  };

  return (
    <div className="image-uploader">
      {!image && (
        <div className='upload-container'{...getRootProps()}>        
          <input {...getInputProps()} />
          <img src={upload} alt="upload-icon" />
          Drag & drop an image, or click to select one
        </div>
      )}

      {image && (
        <div className='uploaded-image'>
          <h2>Uploaded Image:</h2>
          <img src={image} alt="uploaded"/>
        </div>
      )}

      {loading && (
        <div>
          <p>Loading prediction...</p>
        </div>
      )}

      {prediction && !loading && (
        <div>
          <h2>Animal Predicted as : {prediction}</h2>
          <h2></h2>
        </div>
      )}

      {prediction && !loading && (
        <div className='new-upload'>
          <button onClick={handleNewUpload}>
            <h2>Upload New</h2>
          </button>
        </div>
      )}
    </div>
  );
};
export default Prediction;