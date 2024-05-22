import React, { Component } from 'react'
import Regularcomp from './Regularcomp'
import PureCompo from './PureComponent'
import Memocomp from './Memocomp'

 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'dimpal'
      }
    }
   
    componentDidMount(){
       setInterval(() =>{
        this.setState({
            name:'dimpal'
        })
       },2000) 
    }
  render() {
    console.log('******parent component***')
    return (
      <div>
        Parent Component
        <Memocomp  name={this.state.name}/>
        {/* <Regularcomp name={this.state.name}></Regularcomp>
        <PureCompo name={this.state.name}></PureCompo> */}
      </div>
    )
  }
}

export default ParentComp
