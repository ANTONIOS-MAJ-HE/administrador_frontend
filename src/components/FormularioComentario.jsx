import React, { useState, useEffect } from 'react';
import axios from 'axios';
import productoService from '../services/productoService';

const FormularioComentario = ({ comentarioSeleccionado, setComentarioSeleccionado }) => {
  const [cuerpo, setCuerpo] = useState('');
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [producto, setProducto] = useState('');
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (comentarioSeleccionado) {
      setCuerpo(comentarioSeleccionado.cuerpo);
      setEmail(comentarioSeleccionado.email);
      setNombre(comentarioSeleccionado.nombre);
      setProducto(comentarioSeleccionado.producto.toString());
    } else {
      resetForm();
    }
  }, [comentarioSeleccionado]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await productoService.getProductos();
        setProductos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const comentario = { cuerpo, email, nombre, producto: parseInt(producto) };
      if (comentarioSeleccionado) {
        await axios.put(`http://localhost:8000/comentarios/${comentarioSeleccionado.id}/`, comentario);
        // Realizar alguna acción después de editar el comentario
        setComentarioSeleccionado(null); // Limpiar la selección de comentario después de la edición
        resetForm(); // Limpiar el formulario después de la edición
      } else {
        await axios.post('http://localhost:8000/comentarios/', comentario);
        // Realizar alguna acción después de crear el comentario
        resetForm(); // Limpiar el formulario después de la creación
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setCuerpo('');
    setEmail('');
    setNombre('');
    setProducto('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea placeholder="Cuerpo" value={cuerpo} onChange={(e) => setCuerpo(e.target.value)}></textarea>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <select value={producto} onChange={(e) => setProducto(e.target.value)}>
        <option value="">Seleccionar Producto</option>
        {productos.map((producto) => (
          <option key={producto.id} value={producto.id}>
            {producto.nombre}
          </option>
        ))}
      </select>
      <button type="submit">{comentarioSeleccionado ? 'Editar Comentario' : 'Crear Comentario'}</button>
    </form>
  );
};

export default FormularioComentario;
