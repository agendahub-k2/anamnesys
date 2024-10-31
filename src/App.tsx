// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './pages/Login';
import Navbar from './components/Navbar';
import './App.css'; // Se você tiver um CSS global

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: '64px' }}> {/* Ajuste a margem conforme necessário */}
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* Outras rotas podem ser adicionadas aqui */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
