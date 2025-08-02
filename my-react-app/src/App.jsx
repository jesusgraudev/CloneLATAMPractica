import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* AQUI INICIA EL HEARDER-NAVBAR 👇👇 */}
      <div>
        <div>
          LOGO
        </div>  
        <div>
          <a href="#">Descubre</a>
          <a href="#">Mis Viajes</a>
          <a href="#">Centro de ayuda</a>
        </div>
        <div>
          <a href="">Estado de vuelo</a>
          <a href="">LATAM Pass</a>
          <a href="">USD • USD</a>
        </div>
        <div>
          <a href="">Iniciar Sesión</a>
        </div>
      </div>
    </>
  )
}

export default App
