import React, { Component } from "react";
import "./App.css";
import axios from 'axios'
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory : [],
      selectedProduct : ''
    };

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios
      .get("/api/inventory")
      .then(res => {
        console.log('this is the data' ,res.data)
        this.setState({ inventory: res.data });
      })
      .catch(err => {
        console.log("error", err);
      });
  }

  render() {
    return(
      
    <div className="App">
      <Header />
      <Dashboard didMount={this.componentDidMount} inventory={this.state.inventory}/>
      <Form didMount={this.componentDidMount} update={this.updateList} selectedProduct={this.state.selectedProduct}/>
    </div>
    )
  }
}

export default App;