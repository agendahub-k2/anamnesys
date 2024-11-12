// App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import Register from './pages/Register';  

function App() {
  return (
    <>
      <Navbar /> {/* A Navbar ficará visível em todas as páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} /> 
      </Routes>
    </>
  );
}

export default App;
