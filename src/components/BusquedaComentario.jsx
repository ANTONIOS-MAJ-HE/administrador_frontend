import React, { useState } from 'react';
import comentarioService from '../services/comentarioService';

const BusquedaComentario = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const data = await comentarioService.searchComentarios(searchTerm);
      onSearch(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Buscar comentario" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default BusquedaComentario;
