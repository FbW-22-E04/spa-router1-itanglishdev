import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
import Me from './components/Me'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavHeader from './components/NavHeader'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'

ReactDOM.render(
  <BrowserRouter>
    <NavHeader />
    <Routes>
      <Route path='/' element={<Me />} />
      <Route path='/hobbies' element={<Hobbies />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter >,
  document.getElementById('root'))
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)
