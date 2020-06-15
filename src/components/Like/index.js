import React, { Component } from 'react'



export default class Like extends Component {
    constructor(){
        super()
        console.log('constructor')
        this.state = {
            isLiked: false,
        }
    }
    // static getDerivedStateFromProps(props, state){
    //     console.log('getDerivedStateFromProps')
    //     return {
    //         isLiked: true,
    //     }
    // }
    shouldComponentUpdate(res){
        return true
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    render() {
        console.log('render')
        return (
            <div>
                <span onClick={this.handleLiked}>
                    {this.state.isLiked?'💖取消':'🖤喜欢'}
                </span>
            </div>
        )
    }
    handleLiked=()=>{
        // this.setState({
        //     isLiked:!this.state.isLiked
        // })
        this.setState((preState,props)=>{
            // 上一次的state和props
            console.log(preState,props)
            console.log('setState内部的isLiked',this.state.isLiked)
            return {
                isLiked:!preState.isLiked
            }
        },()=>{
            console.log('回调')
        })
        console.log('setState外部的isLiked',this.state.isLiked)
    }
}
