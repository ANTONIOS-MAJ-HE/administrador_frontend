import React, { useState } from 'react';
import productoService from '../services/productoService';

const BusquedaProducto = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const data = await productoService.searchProductos(searchTerm);
      onSearch(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Buscar producto" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default BusquedaProducto;
