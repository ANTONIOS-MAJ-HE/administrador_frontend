import React, { useState } from 'react';
import usuarioRolService from '../services/usuarioRolService';

const BusquedaUsuarioRol = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const data = await usuarioRolService.searchUsuarioRoles(searchTerm);
      onSearch(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Buscar usuario-rol" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default BusquedaUsuarioRol;
