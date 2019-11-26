import React, {Component} from 'react'
import Form from './Form/Form'
import Dashboard from './Dashboard/Dashboard'
import Header from './Header/Header'

export default class Main extends Component{
    constructor(){
        super()
        this.handler = this.handler.bind(this)
        this.state = {             
            page: 'dashboard'
        }
    }
    
    handler = (value) => {
      console.log({value})
        this.setState({
            page: value
        })
    }



    render(){
      let page = this.state.page
      let button 
      if(page == 'dashboard'){
        button = <Dashboard/> 
      }
      else if (page == 'form'){
        button = <Form/>
      }
        return(
            <div>
              <Header action={this.handler}/>
              {button}
            </div>
        )
    }
}