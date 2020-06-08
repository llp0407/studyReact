import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class TodoList extends Component {
    static propTypes = {
        todos:PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            isCompleted:PropTypes.bool.isRequired,
        })).isRequired,
        onCompletedChange:PropTypes.func
    }
    render() {
        return (
            <ul>
                {this.props.todos.map((item,idx)=>
                    <TodoItem 
                        key={item.id} 
                        {...item} idx={idx} 
                        handleCommit={this.props.handleCommit}
                        onCompletedChange={this.props.onCompletedChange}
                    />
                )}
            </ul>
        )
    }
}
