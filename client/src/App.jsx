import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header'
import Navigation from './Componets/Navigation'
import Home from './Pages/Home'
function App() {

  return (
   <>
   <Header/>
   <Home/>
   <Navigation/>
   </>
  )
}

export default App
