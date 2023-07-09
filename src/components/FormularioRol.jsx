import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormularioRol = ({ rolSeleccionado, setRolSeleccionado }) => {
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    if (rolSeleccionado) {
      setNombre(rolSeleccionado.nombre);
    } else {
      resetForm();
    }
  }, [rolSeleccionado]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const rol = { nombre };
      if (rolSeleccionado) {
        await axios.put(`http://127.0.0.1:8000/roles/${rolSeleccionado.id}/`, rol);
        // Realizar alguna acción después de editar el rol
        setRolSeleccionado(null); // Limpiar la selección de rol después de la edición
        resetForm(); // Limpiar el formulario después de la edición
      } else {
        await axios.post('http://127.0.0.1:8000/roles/', rol);
        // Realizar alguna acción después de crear el rol
        resetForm(); // Limpiar el formulario después de la creación
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setNombre('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <button type="submit">{rolSeleccionado ? 'Editar Rol' : 'Crear Rol'}</button>
    </form>
  );
};

export default FormularioRol;
