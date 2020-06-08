import React from 'react'
import {render} from 'react-dom'

import './index.css'

//定义组件的第二种方式，使用类

class App extends React.Component{
    render () {
        const style = {color:'blue'}
        return (
            <div>
                <h1>类组件</h1>
                <p>{this.props.desc}</p>
                <ol>
                    <li style={style}>使用内联创建</li>
                    <li className="has-text-red">使用class的方式，但是在react里class要写成className</li>
                    <li className={`container tab ${true?'a':'b'}`}>动态添加不同的className</li>
                </ol>
            </div>
        )
    }
}

// 类组件渲染的原理
// const app = new App({
//     desc:'类组件是继承React.Component的'
// }).render()

render(
    <App desc="类组件是继承React.Component的"/>,
    document.querySelector('#root')
)