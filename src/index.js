import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavHeader from './components/NavHeader'

ReactDOM.render(
  <BrowserRouter>
    <NavHeader />
    {/* <App /> */}
  </BrowserRouter>,
  document.getElementById('root'))
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)
