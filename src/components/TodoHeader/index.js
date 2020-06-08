import React from 'react'
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
    console.log(props)
    return (
        <>
            <h1>{props.title}</h1>
            {props.children}
            <div>{props.x + props.y}</div>
        </>
    )
}


TodoHeader.propTypes = {
    title:PropTypes.string,
    x:PropTypes.number.isRequired,
    y:PropTypes.number.isRequired,
}