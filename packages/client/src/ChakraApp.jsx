import { AppRouter } from './router/AppRouter'
import { ToggleColorMode } from './components/ToggleColorMode'
import UserContext from './components/AccountContext'
import socket from './socket'

export const  ChakraApp = () => {

  socket.connect();

  return (
    <>
     <UserContext>
       <AppRouter/>
       <ToggleColorMode/>
      </UserContext>
    </>
  )
}

