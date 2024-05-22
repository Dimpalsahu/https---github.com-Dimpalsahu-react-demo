import React, { Component } from 'react'

 class Form extends Component {
constructor(props) {
  super(props)

  this.state = {
     username:'' ,
     Comment:'',
     topic:''
  }
}
handleusernamechange =(event) =>{
          this.setState({
            username: event.target.value
          })
}
handlecommentchange =(event) =>{
    this.setState({
        Comment:event.target.value
    })
}
handlertopicchange =(event) =>{
    this.setState({
        topic:event.target.value
    })
}
handlesubmit = (event) =>
    {
        alert(`${this.state.username} ${this.state.Comment} ${this.state.topic}`)
    }
  render() {
    return (
        <form onSubmit={this.handlesubmit}>
      <div>
        <label>USername</label>
        <input type="text" value={this.state.username} onChange={this.handleusernamechange}/>
      </div>
      <div>
        <label>Textarea</label>
        <textarea value={this.state.Comment} onChange={this.handlecommentchange}></textarea>
      </div>
      <div>
        <label>Topic</label>
      <select value={this.state.topic} onChange={this.handlertopicchange}>
        <option value="React">React</option>
        <option value="nodejs">nodejs</option>
        <option value="js">js</option>
      </select>
      </div>
      <button >Submit</button>
      </form>
    )
  }
}

export default Form
