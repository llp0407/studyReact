import React, { Component } from 'react'

export default class TodoItem extends Component {
    constructor(props){
        super()
        this.state={
            completedText:''
        }
    }
    static getDerivedStateFromProps (props){
        console.log('getDerivedStateFromProps',props)
        return {
            completedText:props.completed?'完成':'未完成',
        }
    }
    render() {
        console.log('todo item render')
        return (
            <li >
                <input
                    checked={this.props.completed}
                    type="checkbox"
                    onChange={this.iptChange}
                >
                </input>
                TodoItem=>
                {this.props.title}--{this.state.completedText}
                {this.props.completed?'':<button onClick={this._handleCommit.bind(this)}>完成{this.props.idx}</button>}
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
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps)
        // console.log(nextState)
        console.log(this.props)
        return nextProps.completed !== this.props.completed
    }
}
