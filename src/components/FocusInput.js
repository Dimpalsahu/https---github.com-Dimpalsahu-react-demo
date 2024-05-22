import React, { Component } from 'react'

class FocusInput extends Component {
    constructor(props) {
        super(props)
     this.componentRef=React.createRef()
         
      }
 
    clickhandler = () =>{
        this.componentRef.current.FocusInput()
    } 
  render() {

    return (
      <div>
        <input ref={this.componentRef}/>
        <button onClick={this.clickhandler}>focus input</button>
      </div>
    )
  }

}

export default FocusInput
