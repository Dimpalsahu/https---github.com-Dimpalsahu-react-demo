import React, { Component } from 'react'


class ClickCounter2 extends Component {
    
      
    render() {
      const { count ,increamnetcount } = this.props
      return  <button onClick={increamnetcount}>Clicked {count} times</button>
     
  
    }
  }

export default ClickCounter2
