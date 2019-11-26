import React, {Component} from 'react'
import axios from 'axios'
import Product from '../Product/Product'

export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
        products: [],
        }
    }
    
    componentDidMount(){
        axios
        .get('/api/inventory')
        .then(res => {
            this.setState({
                products: res.data
            })
            console.log(res)
        })
    }

    render(){
        const products = this.state.products
        let list = []
        products.forEach(product => {
           list.push(
               <Product product={product}/>
           )
        })
        return(
            <div>
               {list}
            </div>
        )
    }
}


