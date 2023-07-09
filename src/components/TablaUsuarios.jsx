import React, { useEffect, useState } from 'react';
import usuarioService from '../services/usuarioService';

const TablaUsuarios = ({ setUsuarioSeleccionado }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsuarios, setFilteredUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const data = await usuarioService.getUsuarios();
        setUsuarios(data);
        setFilteredUsuarios(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsuarios();
  }, []);

  const handleDelete = async (id) => {
    try {
      await usuarioService.deleteUsuario(id);
      setUsuarios((prevUsuarios) => prevUsuarios.filter((usuario) => usuario.id !== id));
      setFilteredUsuarios((prevUsuarios) => prevUsuarios.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (usuario) => {
    setUsuarioSeleccionado(usuario);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = usuarios.filter((usuario) => usuario.id.toString().includes(value));
    setFilteredUsuarios(filtered);
  };

  return (
    <div>
      <input type="text" placeholder="Buscar usuario por ID" value={searchTerm} onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
              <td>{usuario.username}</td>
              <td>{usuario.password}</td>
              <td>
                <button onClick={() => handleEdit(usuario)}>Editar</button>
                <button onClick={() => handleDelete(usuario.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuarios;
