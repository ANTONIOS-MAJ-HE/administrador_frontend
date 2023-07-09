import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsuariosPage from '../pages/UsuariosPage';
import RolesPage from '../pages/RolesPage';
import ProductosPage from '../pages/ProductosPage';
import ComentariosPage from '../pages/ComentariosPage';
import UsuarioRolesPage from '../pages/UsuarioRolesPage';
import Navbar from '../components/Navbar';
import Login from '../components/Login';


const RoutesProject = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path='/' element= {<h1>Inicio </h1>} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/comentarios" element={<ComentariosPage />} />
        <Route path="/usuario-roles" element={<UsuarioRolesPage />} />
        <Route path='/login' element= {<Login/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default RoutesProject;
