import React from 'react'
import './Sqaure.css'

function Sqaure({ children, black }) {
    const bgClass = black ? 'sqaure-black' : 'sqaure-white';

    return (
        <div className={`board-sqaure ${bgClass}`} >
            {children}
        </div>
    )
}

export default Sqaure
