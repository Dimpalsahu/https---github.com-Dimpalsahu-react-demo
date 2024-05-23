import React from "react";


const updatecomponent = (originalcomponent) => {
class NewComponent extends React.Component{
   render(){
    return <originalcomponent name='dimpal' />
   } 
}
return NewComponent
} 
export default updatecomponent