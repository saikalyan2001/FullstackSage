import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../Components/MenuNavLinks/LoginPage'
import SignUpPage from '../Components/MenuNavLinks/SignUpPage'
import Home from '../Components/Home/Home'

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>

      </BrowserRouter>

    </div>
  )
}

export default Routing