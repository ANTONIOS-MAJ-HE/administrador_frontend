import React, { useState } from 'react';
import FormularioComentario from '../components/FormularioComentario';
import TablaComentarios from '../components/TablaComentarios';

const ComentariosPage = () => {
  const [comentarioSeleccionado, setComentarioSeleccionado] = useState(null);

  return (
    <div>
      <h1>Comentarios</h1>
      <div>
        <FormularioComentario comentarioSeleccionado={comentarioSeleccionado} setComentarioSeleccionado={setComentarioSeleccionado} />
      </div>
      <div>
        <TablaComentarios setComentarioSeleccionado={setComentarioSeleccionado} />
      </div>
    </div>
  );
};

export default ComentariosPage;
