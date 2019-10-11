import React, {Component} from 'react';
import Product from './../Product/Product';

class Dashboard extends Component {
    render(){
        return(
            <div>
                Dashboard
                <Product />
                <div>
                    {this.props.inventory}
                </div>
            </div>
        )
    }  
}

export default Dashboard;