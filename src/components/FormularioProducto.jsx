import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormularioProducto = ({ productoSeleccionado, setProductoSeleccionado }) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');

  useEffect(() => {
    if (productoSeleccionado) {
      setNombre(productoSeleccionado.nombre);
      setCantidad(productoSeleccionado.cantidad);
      setPrecio(productoSeleccionado.precio);
    } else {
      resetForm();
    }
  }, [productoSeleccionado]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const producto = { nombre, cantidad, precio };
      if (productoSeleccionado) {
        await axios.put(`http://127.0.0.1:8000/productos/${productoSeleccionado.id}/`, producto);
        // Realizar alguna acción después de editar el producto
        setProductoSeleccionado(null); // Limpiar la selección de producto después de la edición
        resetForm(); // Limpiar el formulario después de la edición
      } else {
        await axios.post('http://127.0.0.1:8000/productos/', producto);
        // Realizar alguna acción después de crear el producto
        resetForm(); // Limpiar el formulario después de la creación
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setNombre('');
    setCantidad('');
    setPrecio('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="text" placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
      <input type="text" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
      <button type="submit">{productoSeleccionado ? 'Editar Producto' : 'Crear Producto'}</button>
    </form>
  );
};

export default FormularioProducto;
