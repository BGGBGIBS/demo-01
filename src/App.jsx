import { useState } from 'react'
import './App.css'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import ProductList from './components/product-list/product-list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <ProductList/>
    <Footer/>
    </>
  )
}

export default App
