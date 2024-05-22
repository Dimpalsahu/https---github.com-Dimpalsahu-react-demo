import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Dimpal'
      }
      console.log('lifecycleaA constructor order of execution')
    }
    static getDerivedStateFromProps(props , state){
        console.log('lifecycle getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycle of componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('lifecycycle shouldComponentUpdate')
        return true
    }
   getSnapshotBeforeUpdate(){
    console.log('lifecycle getSnapshotBeforeUpdate')
    return null
   }
    componentDidUpdate(){
        console.of('lifecycleA componentDidUpdate')
    }

    changeState = () =>{
        this.setState({
           name:'john' 
        })
    }
  render() {
    console.log('lifecycle  render')
    return (
      <div>
      <div>  <h1>LifecycleA</h1></div>
      <button onClick={this.changeState}>change state</button>
       <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LifeCycleA
