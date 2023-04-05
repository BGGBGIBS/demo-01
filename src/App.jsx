import { useState } from 'react'
import './App.css'
import ProductList from './components/product-list/product-list'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import Navbar from './components/nav-bar/nav-bar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    
    <Footer/>
    </>
  )
}

export default App
