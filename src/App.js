import React, { Component,Fragment } from 'react'
import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like,
} from './components'

export default class App extends Component {
    // state = {
    //     title:'待办事项列表 state'
    // }
    
    constructor(){
        super()
        this.state = {
            title:'待办事项列表 state',
            todos:[],
            rich_text:`<div>富文本rich_text</div>`,
            isLoading:true
        }
    }
    addTodo=(todoTitle)=>{
        // console.log(todoTitle,this)
        this.state.todos.push({
            id:this.state.todos.length+1,
            title:todoTitle,
            completed:false
        })
        this.setState({
            todos:this.state.todos
        })
    }
    handleCommit=(idx)=>{
        // console.log(idx)
        let arr = [...this.state.todos]
        arr[idx].completed = true
        this.setState({
            todos:arr
        },()=>{
            console.log(this.state.todos)
        })
    }
    onCompletedChange = (idx)=>{
        console.log('onCompletedChange',idx)
        // let arr = [...this.state.todos]
        // arr[idx].completed = true
        // this.setState({
        //     todos:arr
        // },()=>{
        //     console.log(this.state.todos)
        // })
    }
    render() {
        return (
            <Fragment>
                App<br/>
                {
                    <div dangerouslySetInnerHTML={{__html:this.state.rich_text}}/>
                }
                <TodoHeader desc="今日事,今日毕" title="TodoHeader待办事项22" x={1} y={2}>
                    <h2>待办事项列表 solt</h2>
                    <h3>{this.state.title}</h3>
                </TodoHeader>
                <TodoInput addTodo={this.addTodo} btnText="ADD"/>
                {this.state.isLoading?<div>loading...</div>:<TodoList 
                    todos={this.state.todos}
                    handleCommit={this.handleCommit}
                    onCompletedChange={this.onCompletedChange}
                />}
            
                <Like ttt="pppp"></Like>
            </Fragment>

            // <>
            //     App
            //     <TodoHeader/>
            //     <TodoInput/>
            //     <TodoList/>
            // </>
        )
    }
    componentDidMount(){
        // console.log(this.http.getTodos)
        this.http.getTodos().then(res=>{
            console.log('请求结果',res)
            if(res.status === 200){
                this.setState({
                    todos:res.data
                })
            }
        })
        .catch(err=>{
            console.log(err)
        })
        .finally(()=>{
            this.setState({
                isLoading:false
            })
        })
    }
}
