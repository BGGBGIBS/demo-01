// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from '../home/home';
import ProductList from '../product-list/product-list';
import Account from '../account/account';

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
            <Link to="/account">ACCOUNT</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route path="/products" element={<ProductList />}>
        </Route>
        <Route path="/account" element={<Account />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default NavBar;