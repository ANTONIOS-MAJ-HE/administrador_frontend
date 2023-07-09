import React, { useState } from 'react';
import FormularioRol from '../components/FormularioRol';
import TablaRoles from '../components/TablaRoles';

const RolesPage = () => {
  const [rolSeleccionado, setRolSeleccionado] = useState(null);

  return (
    <div>
      <h1>Roles</h1>
      <FormularioRol rolSeleccionado={rolSeleccionado} setRolSeleccionado={setRolSeleccionado} />
      <TablaRoles setRolSeleccionado={setRolSeleccionado} />
    </div>
  );
};

export default RolesPage;
