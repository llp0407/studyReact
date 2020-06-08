import React from 'react'
import ReactDOM from 'react-dom'


// const creatApp = (props)=>{
//     return (
//         <div>
//             {/* 注释也要加花括号 */}
//             <h1>{props.title}</h1>
//             <p>优秀的{props.title}</p>
//         </div>
//     )

// }

// const app = creatApp({
//     title:'React 16.8'
// })

//创建组件的第一种方式，使用箭头函数，但是这个名字要大写开始
const App = (props) => {
    console.log(props)
    return (
        <div>
            {/* 注释也要加花括号 */}
            <h1>{props.title}</h1>
            <p title={props.title}>优秀的{props.title}</p>
        </div>
    )
}

ReactDOM.render(
    <App title="react 16.9"></App>,
    document.querySelector('#root')
)
