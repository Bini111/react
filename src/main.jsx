
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import  './index.css'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import { StrictMode } from 'react'
import HomePage from'./components/HomePage.jsx'
import ServicePage from './components/ServicePage.jsx'
import AboutPage from './components/AboutPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import Navbar from './components/Navbar.jsx'
import DynamicPage from './components/DynamicPage.jsx'
import ProductPage from './components/ProductPage.jsx'
import ProductDetails from './components/ProductDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <App/> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>


        <Route path="/" element={<HomePage/>}/>
        <Route path="/dynamic/:id" element={<DynamicPage/>}/>
        <Route path="/services" element={<ServicePage/>}/>
        <Route path="/aboutus" element={<AboutPage/>}/>
        <Route path="/contactus" element={<ContactPage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        

        </Routes>
       
        </BrowserRouter>

  </StrictMode>
 
  
 
)
