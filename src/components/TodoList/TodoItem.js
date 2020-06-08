import React, { Component } from 'react'

export default class TodoItem extends Component {
    
    render() {
        return (
            <li >
                <input
                    checked={this.props.isCompleted}
                    type="checkbox"
                    onChange={this.iptChange}
                >
                </input>
                TodoItem
                {this.props.title}--{this.props.isCompleted?'完成':'未完成'}
                {this.props.isCompleted?'':<button onClick={this._handleCommit.bind(this)}>完成{this.props.idx}</button>}
            </li>
        )
    }
    _handleCommit=()=>{
        this.props.handleCommit(this.props.idx)
    }
    iptChange=()=>{
        // console.log('iptChange')
        this.props.onCompletedChange(this.props.idx)
    }
}
