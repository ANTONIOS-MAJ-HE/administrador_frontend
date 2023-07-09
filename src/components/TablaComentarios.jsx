import React, { useEffect, useState } from 'react';
import comentarioService from '../services/comentarioService';

const TablaComentarios = ({ setComentarioSeleccionado }) => {
  const [comentarios, setComentarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredComentarios, setFilteredComentarios] = useState([]);

  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const data = await comentarioService.getComentarios();
        setComentarios(data);
        setFilteredComentarios(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComentarios();
  }, []);

  const handleDelete = async (id) => {
    try {
      await comentarioService.deleteComentario(id);
      setComentarios((prevComentarios) => prevComentarios.filter((comentario) => comentario.id !== id));
      setFilteredComentarios((prevComentarios) => prevComentarios.filter((comentario) => comentario.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (comentario) => {
    setComentarioSeleccionado(comentario);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = comentarios.filter((comentario) => comentario.id.toString().includes(value));
    setFilteredComentarios(filtered);
  };

  return (
    <div>
      <input type="text" placeholder="Buscar comentario por ID" value={searchTerm} onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cuerpo</th>
            <th>Email</th>
            <th>Nombre</th>
            <th>Producto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredComentarios.map((comentario) => (
            <tr key={comentario.id}>
              <td>{comentario.id}</td>
              <td>{comentario.cuerpo}</td>
              <td>{comentario.email}</td>
              <td>{comentario.nombre}</td>
              <td>{comentario.producto}</td>
              <td>
                <button onClick={() => handleEdit(comentario)}>Editar</button>
                <button onClick={() => handleDelete(comentario.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaComentarios;
