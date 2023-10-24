import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="titulo">Bienvenidos al contador de clicks</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          cantidad de clicks {count}
        </button>
      </div>
    </>
  )
}

export default App
