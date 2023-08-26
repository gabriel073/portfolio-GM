import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraBaseProvider } from '@chakra-ui/react'
import theme from '../theme.js'
import './index.css'
import { ColorModeScript } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
