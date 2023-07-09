import React, { useState } from 'react';
import FormularioProducto from '../components/FormularioProducto';
import TablaProductos from '../components/TablaProductos';

const ProductosPage = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  return (
    <div>
      <h1>Productos</h1>
      <FormularioProducto productoSeleccionado={productoSeleccionado} setProductoSeleccionado={setProductoSeleccionado} />
      <TablaProductos setProductoSeleccionado={setProductoSeleccionado} />
    </div>
  );
};

export default ProductosPage;
