import React, { Component } from 'react'

 class Regularcomp extends Component {
  render() {
    console.log('the regularcomponents')
    return (
      <div>
        Regular Component{this.props.name}
      </div>
    )
  }
}

export default Regularcomp
