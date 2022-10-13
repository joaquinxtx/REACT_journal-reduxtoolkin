import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPages } from '../pages/LoginPages'
import { RegistrerPages } from '../pages/RegistrerPages'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={<LoginPages/>}/>
        <Route path='register' element={<RegistrerPages/>}/>

        <Route path='/*' element={<Navigate to='/auth/login'/>}/>
    </Routes>
  )
}
