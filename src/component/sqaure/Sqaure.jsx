import React from 'react'
import './Sqaure.css'

function Sqaure({ children, black, nextMove }) {
    const bgClass = black ? 'sqaure-black' : 'sqaure-white';
    const greenDot = nextMove ? 'green-dot' : 'none'

    return (
        <div className={`board-sqaure ${bgClass}`} >
            <span className={`${greenDot}`}></span>
            {children}
        </div>
    )
}

export default Sqaure
