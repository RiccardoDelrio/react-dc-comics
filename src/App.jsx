import { useState } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import Headers from './components/Header'
import Footers from './components/Footer'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers />
      <Main />
      <Footers />

    </>
  )
}

export default App
