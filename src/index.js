import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Me from './Me'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavHeader from './components/NavHeader'

ReactDOM.render(
  <BrowserRouter>
    <NavHeader />
    <Routes>
      <Route path='/' element={<Me />} />
      <Route />
      <Route />
    </Routes>
  </BrowserRouter >,
  document.getElementById('root'))
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)
