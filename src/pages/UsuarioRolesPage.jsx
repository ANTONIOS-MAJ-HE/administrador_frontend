import React, { useState } from 'react';
import FormularioUsuarioRol from '../components/FormularioUsuarioRol';
import TablaUsuarioRoles from '../components/TablaUsuarioRoles';

const UsuarioRolesPage = () => {
  const [usuarioRolSeleccionado,setUsuarioRolSeleccionado] = useState(null);

  return (
    <div>
      <h1>Usuario-Roles</h1>
      <div>
        <FormularioUsuarioRol usuarioRolSeleccionado={usuarioRolSeleccionado} setUsuarioRolSeleccionado={setUsuarioRolSeleccionado} />
      </div>
      <div>
        <TablaUsuarioRoles setUsuarioRolSeleccionado={setUsuarioRolSeleccionado} />
      </div>
    </div>
  );
};

export default UsuarioRolesPage;
