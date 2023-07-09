import React, { useEffect, useState } from 'react';
import rolService from '../services/rolService';

const TablaRoles = ({ setRolSeleccionado }) => {
  const [roles, setRoles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRoles, setFilteredRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const data = await rolService.getRoles();
        setRoles(data);
        setFilteredRoles(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRoles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await rolService.deleteRol(id);
      setRoles((prevRoles) => prevRoles.filter((rol) => rol.id !== id));
      setFilteredRoles((prevRoles) => prevRoles.filter((rol) => rol.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (rol) => {
    setRolSeleccionado(rol);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = roles.filter((rol) => rol.id.toString().includes(value));
    setFilteredRoles(filtered);
  };

  return (
    <div>
      <input type="text" placeholder="Buscar rol por ID" value={searchTerm} onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredRoles.map((rol) => (
            <tr key={rol.id}>
              <td>{rol.id}</td>
              <td>{rol.nombre}</td>
              <td>
                <button onClick={() => handleEdit(rol)}>Editar</button>
                <button onClick={() => handleDelete(rol.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaRoles;
