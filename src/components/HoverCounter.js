import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increamentcounter =() =>{
        this.setState(prevstate =>{
            return{count: prevstate.count + 1}
        })
    }
  render() {
    const {count} =this.state
    return  <h2 onMouseOver={this.increamentcounter}>Hover {count} times</h2>
    
  }
}

export default HoverCounter
