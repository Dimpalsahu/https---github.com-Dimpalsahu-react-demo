import React, { Component } from 'react'

 class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Dimpal'
      }
      console.log('lifecycleaB constructor order of execution')
    }
    static getDerivedStateFromProps(props , state){
        console.log('lifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycleB of componentDidMount')
    }


   
    shouldComponentUpdate(){
        console.log('lifecycycle shouldComponentUpdate')
    }
   
    componentDidUpdate(){
        console.of('lifecycleA componentDidUpdate')
    } 
   
    componentDidUpdate(){
        console.of('lifecycleA componentDidUpdate')
    } componentDidMount(){
        console.log('lifecycle of componentDidMount')
    }
    
  render() {
    console.log('lifecycleB  render')
    return (
      <div>
        <h1>LifecycleB</h1>
      </div>
    )
  }
}


export default LifeCycleB
