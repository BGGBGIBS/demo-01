// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from '../home/home';
import ProductList from '../product-list/product-list';
import In from '../in/in/in';
import Calculatrice from '../calculatrice/calculatrice';

function NavBar() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/calculatrice">CALCULATRICE</Link>
          </li>
          <li>
            <Link to="/in">In</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route path="/products" element={<ProductList />}>
        </Route>
        <Route path="/calculatrice" element={<Calculatrice/>}>
        </Route>
        <Route path="/in" element={<In />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default NavBar;