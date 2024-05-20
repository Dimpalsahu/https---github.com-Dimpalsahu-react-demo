import React from "react";

// with using jsx
//  Hello=()=>{

//     return( 
//     <div>
//         <h1>hello vishvas</h1> 
//     </div>

//     )
// }


// without using jsx  pass three parameter (div(string htmltag rendore) ,property,children for the div tag )

const Hello=()=>{
 return React.createElement('div',null, React.createElement('h1' ,null, 'hello vishvash')) 
}
 export default Hello