import React, { Component } from "react";

// change the message when click the buton
class Message extends Component{

    constructor(){
        super()
        this.state={
          message:'welcome visitor'  
        }
    }

    changeMessagess(){
        this.setState({
            message:'Thank you for visiting here'
        })
    }
    render(){
        return(
           <div>
             <h1>{this.state.message}</h1>
            <button onClick= {()=>this.changeMessagess()}>Change Text</button></div>
                        
          ) 

    }
}
export default Message;