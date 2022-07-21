import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/Home.js'
import About from './components/About'
import Post from './components/Project'
import Projects from './components/projects'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<socialLinks />} path="/socialLinks" />
        <Route element={<NavBar />} path="/post/:slug" />

        <Route element={<Post />} path="/post" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<About />} path="/about-me" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
