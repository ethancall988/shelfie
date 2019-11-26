import React, { Component } from 'react'

export default class Product extends Component{
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return(
            <div>
                 <h3>{this.props.product.name}</h3>
                <h3>{this.props.product.price}</h3>
                <img src='http://aynishop.com/images/fixed/blog-default-image.png'/>
            </div>
        )
    }
}