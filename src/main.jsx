
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Navbar />
      <App />
      </BrowserRouter>

)
