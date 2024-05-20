import React from 'react'
// function Greet(){
//     return <h1>Hello Vishvash</h1>
// }



// use arraow fn


const Greet= (a) =>{
console.log(a)

return( 
<div>
    <h1>Hello {a.name}  heroname is {a.heroname}</h1>
{a.children}

</div>
)
}

export default Greet;