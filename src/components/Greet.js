import React from 'react'
// function Greet(){
//     return <h1>Hello Vishvash</h1>
// }



// use arraow fn


// const Greet= (a) =>{
// console.log(a)

// return( 
// <div>
//     <h1>Hello {a.name}  heroname is {a.heroname}</h1>
// {a.children}

// </div>
// )
// }


// passing parameter

// const Greet= ({name,heroname}) =>{
   
    
//     return( 
//     <div>
//         <h1>Hello {name}  heroname is {heroname}</h1>
  
    
//     </div>
//     )
//     }



// Destructing props and functional components
const Greet = props =>{
    const {name,heroname} =props
    return (
        <div>
<h1>  hello my name is{name} and my herois:{heroname} </h1>
            </div>
    ) 
}


export default Greet;