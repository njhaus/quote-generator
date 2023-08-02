import React from 'react'
import ReactDOM from 'react-dom/client'
// Bootstrap CSS
import './index.css'
import App from './App';

// Import only the Bootstrap components we need
import * as bootstrap from 'bootstrap'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
