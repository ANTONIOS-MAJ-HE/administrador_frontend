import React, { useState } from 'react';
import rolService from '../services/rolService';

const BusquedaRol = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const data = await rolService.searchRoles(searchTerm);
      onSearch(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Buscar rol" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default BusquedaRol;
