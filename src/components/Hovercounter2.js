import React, { Component } from 'react'

class Hovercounter2 extends Component {
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
      const {count ,increamentcounter} =this.props
      return  <h2 onMouseOver={increamentcounter}>Hover {count} times</h2>
      
    }
  }

export default Hovercounter2
