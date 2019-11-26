import React, { Component } from 'react'
import axios from 'axios'

export default class Product extends Component{
    constructor(){
        super()

        this.state = {

        }
    }

    deleteItem(){
        console.log(this.props.product.id)
        axios
        .delete('/api/inventory/'+ this.props.product.id)
        .then(res => {
            this.props.action();
        })
    }
        
    render(){
        return(
            <div>
                 <h3>{this.props.product.name}</h3>
                <h3>{this.props.product.price}</h3>
                <img src={this.props.product.image_url}/>
                <button onClick={() => this.deleteItem()}>Delete</button>
            </div>
        )
    }
}