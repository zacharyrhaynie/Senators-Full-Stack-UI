import React, {Component} from 'react'

export default class extends Component {
    state = {}

    render(){
        const senator = this.props.senator
        return (
            <div>
                <br/>
                {senator.person.name}
                <br/>
                {senator.description}
                <br/>
            </div>
        )
    }
}
