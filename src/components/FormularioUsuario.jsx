import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormularioUsuario = ({ usuarioSeleccionado, setUsuarioSeleccionado }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (usuarioSeleccionado) {
      setNombre(usuarioSeleccionado.nombre);
      setEmail(usuarioSeleccionado.email);
      setUsername(usuarioSeleccionado.username);
      setPassword(usuarioSeleccionado.password);
    } else {
      resetForm();
    }
  }, [usuarioSeleccionado]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuario = { nombre, email, username, password };
      if (usuarioSeleccionado) {
        await axios.put(`http://127.0.0.1:8000/usuarios/${usuarioSeleccionado.id}/`, usuario);
        // Realizar alguna acción después de editar el usuario
        setUsuarioSeleccionado(null); // Limpiar la selección de usuario después de la edición
        resetForm(); // Limpiar el formulario después de la edición
      } else {
        await axios.post('http://127.0.0.1:8000/usuarios/', usuario);
        // Realizar alguna acción después de crear el usuario
        resetForm(); // Limpiar el formulario después de la creación
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setNombre('');
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">{usuarioSeleccionado ? 'Editar Usuario' : 'Crear Usuario'}</button>
    </form>
  );
};

export default FormularioUsuario;
