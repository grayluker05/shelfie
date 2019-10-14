import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            price: '',
            image: '',
            selectedProduct: null
        }
    }

    handleInputs = (e) => {
        let { name, value } =  e.target
        this.setState({[name] : value})
      }
    
      handleCancel = () => {
          this.setState({
            image: '',
            name: '',
            price: ''
          })
      }

      buttonPress = () => {
        const {name, price, image} = this.state
        axios.post("/api/inventory", { image, name, price }).then(res => {
          this.props.didMount()
        })
        this.handleCancel()
      }


    render(){
        const {name, price, image} = this.state
        return(
            <div>
               <div className="form-border">
          <div className='row'>
            <img className="add-pic" />
            <article>Image URL:</article>
            <input name='image' value={image} onChange={(e) => this.handleInputs(e)}/>
            <article>Product Name:</article>
            <input name='name' value={name} onChange={(e) => this.handleInputs(e)}/>
            <article>Price:</article>
            <input name='price' value={price} onChange={(e) => this.handleInputs(e)}/>
          </div>
          <button className="cancel-button" onClick={this.handleCancel}>Cancel</button>
          <button className="add-button" onClick={this.buttonPress}>Add to Inventory</button>
        </div>
            </div>
        )
    }
}

export default Form;