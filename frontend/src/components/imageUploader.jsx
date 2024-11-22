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
          border: '2px dashed #ccc',
          padding: '20px',
          width: '300px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select one</p>
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