import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Default from './components/Default';

class App extends Component {
  render(){
  return (
 <React.Fragment>
 <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
 </React.Fragment>
  );
 }
}

export default App; 
