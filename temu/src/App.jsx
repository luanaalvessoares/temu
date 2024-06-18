import { useState } from 'react'
import Temu from './pages/temu/Temu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Temu />
  )
}

export default App
