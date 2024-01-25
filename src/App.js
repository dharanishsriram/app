import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Layout from './Pages/Layout'
export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about"element={<About/>}/>
      <Route path="contact"element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
