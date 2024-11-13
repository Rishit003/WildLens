import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>WildLens</h1>
        <button>Uppload an image</button>
      </div>
    </>
  )
}

export default App


// function App() {
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   // Handle image file selection
//   const handleImageChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!image) {
//       alert('Please select an image');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', image);

//     try {
//       setLoading(true);
//       setResult(null);
//       setError(null);

//       // Replace with your actual API endpoint
//       const response = await fetch('https://api.example.com/predict', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to upload image');
//       }

//       const data = await response.json();

//       // Process the result from the API (assuming it returns species name and description)
//       setResult(data); // Example response: { species: "Lion", description: "Big cat" }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>Animal Species Prediction</h1>
//       </header>

//       <main>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="file-input"
//           />
//           <button type="submit" disabled={loading} className="upload-btn">
//             {loading ? 'Uploading...' : 'Upload Image'}
//           </button>
//         </form>

//         {error && <p className="error">{error}</p>}

//         {result && (
//           <div className="result">
//             <h3>Predicted Species:</h3>
//             <p>{result.species}</p>
//             <h4>Description:</h4>
//             <p>{result.description}</p>
//           </div>
//         )}
//       </main>

//       <footer>
//         <div className="footer-content">
//           <p>&copy; 2024 Animal Species Prediction | All rights reserved.</p>
//           <div className="footer-links">
//             <a href="/about">About</a>
//             <a href="/contact">Contact</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;
