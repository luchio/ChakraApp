import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { ToggleColorMode } from './components/ToggleColorMode'
import UserContext from './components/AccountContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContext>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <ToggleColorMode/>
        <AppRouter/>
        {/* <ChakraApp/> */}
      </ChakraProvider>
      </UserContext>
    </BrowserRouter>
  </React.StrictMode>,
)
