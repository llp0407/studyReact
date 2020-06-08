import React, { Component } from 'react'



export default class Like extends Component {
    constructor(){
        super()
        this.state = {
            isLiked: false
        }
    }
    render() {
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
        },(res)=>{
            console.log(res,'回调')
        })
        console.log('setState外部的isLiked',this.state.isLiked)
    }
}
