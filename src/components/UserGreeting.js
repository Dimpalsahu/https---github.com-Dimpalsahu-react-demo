import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        //  isLoggedIn:false
        isLoggedIn:true
      }
    }
    
 render() {

// circuite approch And OR
return(
   this.state.isLoggedIn && <div>welcome VIshvash</div> 
)
// using third method conditional  ? operator
// return(    
//     this.state.isLoggedIn ? 
//     <div> welcome VIshvash</div> :
//     <div>welcome guest</div>
// )

 }

    // using element variabl second method of js beacuse jsx aproch not using if/else consdition 

// let message;
// if(this.state.message)
//     {
//     message=<div>welcome vishvash</div>
//     }
//     else
//     {
//         message =<div>welcome guest</div>
//     }
// return<div>{message}</div>





//     if(this.state.isLoggedIn){
//         return(
//             <div>
//                 welcome  vishvash
//             </div>
//         )
    
//     }
//     else{
//         return(
//         <div>welcome guest</div>
//     )
//  }
    // return (
    //   <div>

    //    <div>Welcome vishvash</div>
    //    {/* message render conditionally if message not loggeged message should be display welcome guest */}
    //    <div> Welcome guest</div>
    //   </div>
    // )
  }


export default UserGreeting
