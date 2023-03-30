import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../components/Login/Login'
import { Register } from '../components/Login/Register'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<Login/>}/>
    </Routes>
  )
}
