import React, { Component } from 'react'
class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increamnetcount =() =>
    {
        this.setState(prevstate =>{
            return{count:prevstate.count + 1}    
        })
    }
    
  render() {
    const { count } = this.state 
    return  <button onClick={this.increamnetcount}>Clicked {count} times</button>
   

  }
}

export default ClickCounter