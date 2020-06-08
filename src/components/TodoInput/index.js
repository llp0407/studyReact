import React, { Component,createRef } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
    static propTypes = {
        btnText:PropTypes.string
    }
    static defaultProps = {
        btnText:'添加'
    }
    constructor(){
        super()
        this.state = {
            inputValue:'xxx'
        }
        //在constructor里创建ref
        this.inputDom = createRef()
        
    }
    handleInput=(e)=>{
        // console.log(e)
        let value = e.currentTarget.value
        this.setState({
            inputValue:value
        })
        // this.state.inputValue = value
    }
    handleKeyUp = (e)=>{
        if(e.keyCode === 13){
            this.handleAddClick()
        }
    }
    handleAddClick=(e)=>{
        // console.log(this.state,id)
        // console.log('this.inputDom',this.inputDom)
        //...此处省略验证
        this.props.addTodo(this.state.inputValue)
        this.setState({
            inputValue:''
        },()=>{
            this.inputDom.current.focus()
        })
    }
    render() {
        return (
            <div>
                <input
                  type="text"
                  value={this.state.inputValue}
                  onChange={this.handleInput}
                  onKeyUp={this.handleKeyUp}
                  ref={this.inputDom}
                >
                </input>
                <button onClick={this.handleAddClick.bind(this,23)}>{this.props.btnText}</button>
            </div>
        )
    }
}
