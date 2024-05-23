import React, { Component } from 'react'

 class Counter extends Component {
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
    return (
      <div>
        {this.props.render(this.state.count,this.increamnetcount)}
      </div>
    )
  }
}

export default Counter
