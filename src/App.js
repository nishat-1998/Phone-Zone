import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import ProductList from './components/ProductList';
import Cart from './components/Cart/Cart';
import ProductDetails from './components/ProductDetails';
import Default from './components/Default';
import Modal from "./components/Modal";
import Header from './components/Header/Header';


 class App extends Component {
  render(){
  return (
 <React.Fragment>
 <Header/>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal/>
 </React.Fragment>
  );
 }
}

export default App; 
