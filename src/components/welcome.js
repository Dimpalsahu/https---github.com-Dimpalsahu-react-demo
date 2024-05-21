import React, { Component } from 'react';




// class Welcome extends Component{
//     render(){
//         return <h1>class components is {this.props.name}  and hero name is {this.props.name}</h1>
//     }
// }



// Destructuring class components props and state

class Welcome extends Component{
        render(){

            const{name,heroname} =this.props
                    
            return (
            <h1> this is class components name is {name}  and hero name is {heroname}</h1>
            )
         }
 }


export default Welcome;