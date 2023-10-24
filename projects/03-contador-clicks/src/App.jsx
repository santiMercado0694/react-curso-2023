import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 className="titulo">Bienvenidos al contador de clicks</h1>
    </div>
      <div className="botones">
      <button className="modificar" onClick={() => setCount((count) => count - 1)}>
          -
        </button>
        <button className="clicks" >
          CLICKS {count}
        </button>
        <button className="modificar" onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>
      <div className="botones">
        <button className="reiniciar" onClick={() => setCount((count) => count - count)}>
          REINICIAR
        </button>
      </div>
    </>
  )
}

export default App
