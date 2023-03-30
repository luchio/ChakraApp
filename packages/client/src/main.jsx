import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { ToggleColorMode } from './components/ToggleColorMode'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <ToggleColorMode/>
        <AppRouter/>
        {/* <ChakraApp/> */}
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
