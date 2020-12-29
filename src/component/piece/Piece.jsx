import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd';
import './Piece.css'

function Piece({ piece: { type, color }, position, isCheck, turn }) {
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: 'piece', id: `${position}_${type}_${color}` },
        collect: (monitor) => {
            return { isDragging: !!monitor.isDragging() }
        },
    })
    const pieceImgPath = require(`./../../assets/${type}_${color}.png`);
    const isCheckClass = isCheck && type === 'k' && color === turn ? 'red-border' : ''
    return (
        <>
            <DragPreviewImage connect={preview} src={pieceImgPath.default} />
            <div className='piece-container' ref={drag} style={{ opacity: isDragging ? 0 : 1 }}>
                <img src={pieceImgPath.default} className={`piece ${isCheckClass}`} alt="piece" />
            </div>
        </>
    )
}

export default Piece
