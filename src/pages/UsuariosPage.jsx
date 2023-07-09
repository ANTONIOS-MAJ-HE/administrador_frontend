import React, { useState } from 'react';
import FormularioUsuario from '../components/FormularioUsuario';
import TablaUsuarios from '../components/TablaUsuarios';

const UsuariosPage = () => {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [rolSeleccionado, setRolSeleccionado] = useState(null);

  return (
    <div>
      <h1>Usuarios</h1>
      <div>
        <FormularioUsuario usuarioSeleccionado={usuarioSeleccionado} setUsuarioSeleccionado={setUsuarioSeleccionado} />
      </div>
      <div>
        <TablaUsuarios setUsuarioSeleccionado={setUsuarioSeleccionado} />
      </div>
    </div>
  );
};

export default UsuariosPage;
