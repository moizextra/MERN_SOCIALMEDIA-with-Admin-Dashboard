import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css'
import Header from './Componets/Header'
import Navigation from './Componets/Navigation'
import Home from './Pages/Home'
import Footer from './Componets/Footer'
import UserProfile from './Pages/UserProfile';
import Search from './Pages/Search';
import CreatePost from './Pages/CreatePost';
import Messages from './Pages/Messages';
function App() {
  return (
  <Router>
   <Header/>
   <Routes>
   <Route exact path="/" element={<Home />} />
   <Route exact path="/me" element={<UserProfile />} />
   <Route exact path="/search" element={<Search />} />
   <Route exact path="/create" element={<CreatePost />} />
   <Route exact path="/messages" element={<Messages />} />
   </Routes>
      <Navigation/>
   </Router>
  )
}

export default App
