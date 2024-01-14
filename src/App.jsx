import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import {BrowserRouter, Routes, Route}from 'react-router-dom';
import About from './Components/About';
import Projects from './Components/Projects';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
