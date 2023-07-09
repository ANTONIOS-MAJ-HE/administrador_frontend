import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const routes = [
        {
            id:1,
            nombre:'inicio',
            path: '/'
        },
        {
            id:2,
            nombre:'usuarios',
            path: '/usuarios'
        },
        {
            id:3,
            nombre:'productos',
            path: '/productos'
        },
        {
          id:4,
          nombre:'comentarios',
          path: '/comentarios'
      },
      {
        id:5,
        nombre:'roles',
        path: '/roles'
    },
    {
      id:6,
      nombre:'usuario roles',
      path: '/usuario-roles'
  },
  {
    id:7,
    nombre:'login',
    path: '/login'
}
    ]
        
    
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <Link to={route.path}>{route.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar