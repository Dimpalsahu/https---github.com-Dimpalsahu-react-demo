import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
     }

    //  Binding in the constructore ...(best opion to use)
     //this.ClickHandler=this.ClickHandler.bind(this)
    // ClickHandler(){
    //     this.setState({
    //         message:'good by'
    //     })
    //     console.log(this)
    // }
    

// another class proprties  arrow fuunction
ClickHandler = () =>{
    this.setState({
        message:'goodbye'
    })
} 
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
            {/* <button onClick={this.ClickHandler.bind(this)}>click</button> */} 
            {/* this is binding in rendor */}
        
        
        {/* using arrow function in render method */}
    
    {/* <button onClick={() => this.ClickHandler()}>CLick </button> */}
 
 
 <button onClick={this.ClickHandler}>Click</button>
      </div>
    )
}
}

export default EventBinding