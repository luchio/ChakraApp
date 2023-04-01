import { Text } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserContext, { AccountContext } from '../components/AccountContext'
import { Login } from '../components/Login/Login'
import { Register } from '../components/Login/Register'
import PrivateRoutes from '../components/PrivatesRoutes'
import { Home } from '../components/home/Home'

export const AppRouter = () => {

  const {user} = UserContext(AccountContext);

  return (user?.loggedIn === null) ? (
   <Text>Loading...</Text>
  ) : (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route element={<PrivateRoutes/>}> 
        <Route path='/home' element={<Home/>}/>
        </Route>

        <Route path='*' element={<Login/>}/>
        
    </Routes>
  )
    
  
}
