import React, {Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import axios from 'axios';
import './App.css';

 class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: []
    }
  }

  render(){
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
        <Product />
      </div>
    );
  }
}

export default App;
