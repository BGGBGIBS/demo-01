import { useState } from 'react'
import './App.css'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import ProductList from './components/product-list/product-list'
import NavBar from './components/nav-bar/nav-bar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Footer/>
    </>
  )
}

export default App
