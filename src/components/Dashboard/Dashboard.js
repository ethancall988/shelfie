import React, {Component} from 'react'
import axios from 'axios'
import Product from '../Product/Product'

export default class Dashboard extends Component{
    constructor(){
        super()

        this.getProducts = this.getProducts.bind(this)

        this.state = {
        products: [],
        }
    }
    
    componentDidMount(){
        console.log('asldkfj')
        this.getProducts()

    }

    getProducts = () => {
        console.log('llll')
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
               <Product product={product} action={this.getProducts}/>
           )
        })
        return(
            <div>
               {list}
               
            </div>
        )
    }
}


