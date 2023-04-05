import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
    </Router>
  );
}

export default NavBar;