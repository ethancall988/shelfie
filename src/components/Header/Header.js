import React, { Component } from 'react'
import './header.css' 

export default class Header extends Component{
    constructor(){
        super()
        
        this.state = {    
                  
        }
    }

    changePage (page) {
        this.props.action(page)
    }

    render(){
        return(
            <div>
                <hr/>
                <button class='j' onClick={()=> this.changePage('dashboard')}>Dashboard</button>
            <button class='j' onClick={()=> this.changePage('form')}>Add Inventory</button>
            </div>
        )
    }
}

