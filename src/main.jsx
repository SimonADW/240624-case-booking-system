import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RoomsProvider } from './hooks/useRooms.jsx'

const root = document.getElementById('root')

if(!root) 
  throw new Error('root element not found')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RoomsProvider>
      <App />
    </RoomsProvider>
  </React.StrictMode>,
)
