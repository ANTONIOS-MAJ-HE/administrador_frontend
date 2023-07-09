import React, { useEffect, useState } from 'react';
import usuarioRolService from '../services/usuarioRolService';

const TablaUsuarioRoles = ({ setUsuarioRolSeleccionado }) => {
  const [usuarioRoles, setUsuarioRoles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsuarioRoles, setFilteredUsuarioRoles] = useState([]);

  useEffect(() => {
    const fetchUsuarioRoles = async () => {
      try {
        const data = await usuarioRolService.getUsuarioRoles();
        setUsuarioRoles(data);
        setFilteredUsuarioRoles(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsuarioRoles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await usuarioRolService.deleteUsuarioRol(id);
      setUsuarioRoles((prevUsuarioRoles) => prevUsuarioRoles.filter((usuarioRol) => usuarioRol.id !== id));
      setFilteredUsuarioRoles((prevUsuarioRoles) => prevUsuarioRoles.filter((usuarioRol) => usuarioRol.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (usuarioRol) => {
    setUsuarioRolSeleccionado(usuarioRol);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = usuarioRoles.filter((usuarioRol) => usuarioRol.id.toString().includes(value));
    setFilteredUsuarioRoles(filtered);
  };

  return (
    <div>
      <input type="text" placeholder="Buscar usuario-rol por ID" value={searchTerm} onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsuarioRoles.map((usuarioRol) => (
            <tr key={usuarioRol.id}>
              <td>{usuarioRol.id}</td>
              <td>{usuarioRol.usuario}</td>
              <td>{usuarioRol.rol}</td>
              <td>
                <button onClick={() => handleEdit(usuarioRol)}>Editar</button>
                <button onClick={() => handleDelete(usuarioRol.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuarioRoles;
