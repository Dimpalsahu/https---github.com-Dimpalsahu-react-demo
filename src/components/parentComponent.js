import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            prentname: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName) {
        alert(`hello ${this.state.prentname} from ${childName}`)
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
