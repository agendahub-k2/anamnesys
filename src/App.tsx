// App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Certifique-se que o caminho está correto
import Home from './components/Home';     // Certifique-se que o caminho está correto

function App() {
  return (
    <>
      <Navbar /> {/* A Navbar ficará visível em todas as páginas */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* A Home será exibida na rota '/' */}
        {/* Adicione outras rotas aqui, se necessário */}
      </Routes>
    </>
  );
}

export default App;
