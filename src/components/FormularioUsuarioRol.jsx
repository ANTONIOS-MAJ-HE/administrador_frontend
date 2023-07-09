import React, { useState, useEffect } from 'react';
import axios from 'axios';
import usuarioService from '../services/usuarioService';
import rolService from '../services/rolService';

const FormularioUsuarioRol = ({ usuarioRolSeleccionado, setUsuarioRolSeleccionado }) => {
  const [usuario, setUsuario] = useState('');
  const [rol, setRol] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    if (usuarioRolSeleccionado) {
      setUsuario(usuarioRolSeleccionado.usuario.toString());
      setRol(usuarioRolSeleccionado.rol.toString());
    } else {
      resetForm();
    }
  }, [usuarioRolSeleccionado]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const data = await usuarioService.getUsuarios();
        setUsuarios(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchRoles = async () => {
      try {
        const data = await rolService.getRoles();
        setRoles(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsuarios();
    fetchRoles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuarioRol = { usuario: parseInt(usuario), rol: parseInt(rol) };
      if (usuarioRolSeleccionado) {
        await axios.put(`http://localhost:8000/usuario-roles/${usuarioRolSeleccionado.id}/`, usuarioRol);
        // Realizar alguna acción después de editar el usuario-rol
        setUsuarioRolSeleccionado(null); // Limpiar la selección de usuario-rol después de la edición
        resetForm(); // Limpiar el formulario después de la edición
      } else {
        await axios.post('http://localhost:8000/usuario-roles/', usuarioRol);
        // Realizar alguna acción después de crear el usuario-rol
        resetForm(); // Limpiar el formulario después de la creación
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setUsuario('');
    setRol('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={usuario} onChange={(e) => setUsuario(e.target.value)}>
        <option value="">Seleccionar Usuario</option>
        {usuarios.map((usuario) => (
          <option key={usuario.id} value={usuario.id}>
            {usuario.nombre}
          </option>
        ))}
      </select>
      <select value={rol} onChange={(e) => setRol(e.target.value)}>
        <option value="">Seleccionar Rol</option>
        {roles.map((rol) => (
          <option key={rol.id} value={rol.id}>
            {rol.nombre}
          </option>
        ))}
      </select>
      <button type="submit">{usuarioRolSeleccionado ? 'Editar Usuario-Rol' : 'Crear Usuario-Rol'}</button>
    </form>
  );
};

export default FormularioUsuarioRol;
