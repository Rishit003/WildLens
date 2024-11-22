import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Prediction from './components/prediction'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <Prediction />
      <Footer />
    </>
  )
}
export default App;