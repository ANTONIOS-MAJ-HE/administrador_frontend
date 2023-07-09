import React, { useState } from 'react';
import usuarioService from '../services/usuarioService';

const BusquedaUsuario = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const data = await usuarioService.searchUsuarios(searchTerm);
      onSearch(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Buscar usuario" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default BusquedaUsuario;
