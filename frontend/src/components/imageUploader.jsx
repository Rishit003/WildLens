import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null); 
  const [loading, setLoading] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*', 
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setImage(URL.createObjectURL(file)); // Create a local URL for the image
      setPrediction(null); // Clear previous prediction on new upload
      handlePrediction(file); // Call the function to predict
    },
  });

  const handlePrediction = async (file) => {
    const formData = new FormData();
    formData.append('file', file); // Append the file to the FormData object

    setLoading(true); // Set loading state to true before sending the request

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setPrediction(data.animal); // Assume the API returns a JSON with a "prediction" field
      } else {
        console.error('Prediction request failed');
        setPrediction('Error: Failed to get prediction');
      }
    } catch (error) {
      console.error('Error during the fetch operation', error);
      setPrediction('Error: Failed to get prediction');
    } finally {
      setLoading(false); // Set loading state to false after the request is completed
    }
  };

  const handleNewUpload = () => {
    // Reset the state to allow new upload
    setImage(null);
    setPrediction(null);
    setLoading(false);

    // Optionally reload the page (you can also just clear the state if you don't want a full reload)
    window.location.reload();
  };

  return (
    <div className="image-uploader">
      {!image && (
        <div
          {...getRootProps()}
          style={{
            border: '3px dashed white',
            margin: '50px',
            padding: '30px',
            width: '300px',
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: '#242424',
          }}
        >
          <input {...getInputProps()} />
          <img src="./src/images/upload.png" height="80px" alt="" />
          <br />
          Drag & drop an image, or click to select one
        </div>
      )}

      {image && (
        <div style={{ margin: '20px'}}>
          <h2>Uploaded Image:</h2>
          <img src={image} alt="uploaded" style={{ width: '100%', maxWidth: '300px', border: '3px dashed white'}} />
        </div>
      )}

      {loading && (
        <div style={{ margin: '20px' }}>
          <p>Loading prediction...</p>
        </div>
      )}

      {prediction && !loading && (
        <div style={{ marginTop: '20px' }}>
          <h2>Animal Predicted as : {prediction}</h2>
          <h2></h2>
        </div>
      )}

      {/* Button to start a new upload */}
      {prediction && !loading && (
        <div style={{ marginTop: '20px' }}>
          <button onClick={handleNewUpload} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
            NEW Upload
          </button>
        </div>
      )}
    </div>
  );
};
export default ImageUploader;