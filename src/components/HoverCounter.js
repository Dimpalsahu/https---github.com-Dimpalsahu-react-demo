import React, { Component } from 'react'
import updatecomponent from './withcounter'
class HoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increamentcounter = () =>{
        this.setState(prevstate =>{
            return{count: prevstate.count + 1}
        })
    }
  render() {
    const {count} =this.state
    return  <h2 onMouseOver={this.increamentcounter}>
      {this.props.name}Hover {count} times</h2>
    
  }
}

export default updatecomponent(HoverCounter)
