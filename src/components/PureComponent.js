import React, { PureComponent } from 'react'

class PureCompo extends PureComponent {
  render() {
    console.log('pure componnets')
    return (
      <div>
        pure component{this.props.name}
      </div>
    )
  }
}

export default PureCompo

