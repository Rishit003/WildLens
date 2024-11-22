import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*', // Only accept images
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setImage(URL.createObjectURL(file)); // Create a local URL for the image
    },
  });

  return (
    <div className="image-uploader">
      <div
        {...getRootProps()}
        style={{
          
          border: '3px dashed white',
          margin: '50px',
          padding: '30px',
          width: '300px',
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor:'#242424',
        }}
      >
        <input {...getInputProps()} />
        <img src="./src/images/upload.png" height = "80px" alt="" />
        <br />
        Drag & drop an image, or click to select one
        
      </div>

      {image && (
        <div style={{ marginTop: '20px' }}>
          <h4>Preview:</h4>
          <img src={image} alt="preview" style={{ width: '100%', maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;