import React, { Component } from 'react'
import './Forml.css'

export default class Form extends Component{
    constructor(){
        super()

        this.state = {
            price: '$',
            product: '',
            Image:''
        }
    }

    handleChange(e){
        this.setState({
            price: e.target.value
        })
        console.log(e.target.value)
    }

    hanldeProductChange(e){
        this.setState({
            product: e.target.value
        })
        console.log(e.target.value)
    }

    handleChangeImg(e){
        this.setState({
            Image: e.target.value
        })
        console.log(e.target.value)
    }

    reset(){
        this.setState({
            Image: '',
            product: '',
            price: ''
        })
    }
    render(){
        return(
            <div>
                <h6>Image URL:</h6>
                <input value={this.state.Image} placeholder='Image' onChange={e => this.handleChangeImg(e)}></input>
                <h6>Price:</h6>
                <input value={this.state.price} placeholder='$0.00' onChange={e => this.handleChange(e)}></input>
                <h6>Product Name:</h6>
                <input value={this.state.product} placeholder='Product' onChange={e => this.hanldeProductChange(e)}></input>
                <button class='yeet' onClick={() => this.reset()}>Cancel</button>
                <button class='yeet' onClick={() => {}}>Add to Inventory</button>
                
                <hr/>
            </div>

        )
    }
}

