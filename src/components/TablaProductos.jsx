import React, { useEffect, useState } from 'react';
import productoService from '../services/productoService';

const TablaProductos = ({ setProductoSeleccionado }) => {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProductos, setFilteredProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await productoService.getProductos();
        setProductos(data);
        setFilteredProductos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await productoService.deleteProducto(id);
      setProductos((prevProductos) => prevProductos.filter((producto) => producto.id !== id));
      setFilteredProductos((prevProductos) => prevProductos.filter((producto) => producto.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (producto) => {
    setProductoSeleccionado(producto);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = productos.filter((producto) => producto.id.toString().includes(value));
    setFilteredProductos(filtered);
  };

  return (
    <div>
      <input type="text" placeholder="Buscar producto por ID" value={searchTerm} onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredProductos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.precio}</td>
              <td>
                <button onClick={() => handleEdit(producto)}>Editar</button>
                <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProductos;
