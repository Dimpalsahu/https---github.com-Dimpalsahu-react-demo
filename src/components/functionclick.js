// Event handling function
import React from 'react'

function functionClick() {

    function clickHandler(){
        console.log('okay clicked')
    }
  return (
    <div>
      <button onClick={clickHandler()}>CLICK</button>        
    </div>
  )
}

export default functionClick;
