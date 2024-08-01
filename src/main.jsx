import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RoomsProvider } from './hooks/useRooms.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoomsProvider>
      <App />
    </RoomsProvider>
  </React.StrictMode>,
)
