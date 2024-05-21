import React from 'react'
function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet parent</button> */}

      {/* using arrow function to pass the parameter to child componen to parent */}
      <button onClick={() => props.greetHandler('child')}>Greet parent</button>
    </div>
  )
}

export default ChildComponent
