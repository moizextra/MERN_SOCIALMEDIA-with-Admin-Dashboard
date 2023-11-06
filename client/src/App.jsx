import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header'
import Navigation from './Componets/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Navigation/>
   </>
  )
}

export default App
