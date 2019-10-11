import React, {Component} from 'react';
import Axios from 'axios';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    clear = id => {
        axios.delete(`/api/inventory/${id}`)
        .then(res => {
            inventory: res.data
        })
        .catch(err => console.log(err))
    }


    render(){
        return(
            <div>
                Form
            </div>
            <div>
                <name type="text" value={this.state.name} onChange={this.handleChange}/>
                <price type="number" value={this.state.price} onChange={this.handleChange}/>
                <imgurl type="url" value={this.state.imgurl} onChange={this.handleChange}/>
                <button>
                    Add to Inventory
                </button>
                <button onClick={this.clear}>
                    Cancel
                </button>
            </div>
        )
    }
}

export default Form;