import React from 'react'
import './mystyle.css'
function Stylsheet(props) {
    const classname=props.primary ? 'primary' :''
  return (
    <div>
      {/* <h1 className='primary' >Stylsheet</h1> */}
      <h1 className={`${classname} font-x1`}>Stylsheet</h1> 
    </div>
  )
}

export default Stylsheet
