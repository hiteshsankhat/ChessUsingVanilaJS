import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd';
import './Piece.css'

function Piece({ piece: { type, color }, position }) {
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: 'piece', id: `${position}_${type}_${color}` },
        collect: (monitor) => {
            return { isDragging: !!monitor.isDragging() }
        },
    })
    const pieceImgPath = require(`./../../assets/${type}_${color}.png`);
    return (
        <>
            <DragPreviewImage connect={preview} src={pieceImgPath.default} />
            <div className='piece-container' ref={drag} style={{ opacity: isDragging ? 0 : 1 }}>
                <img src={pieceImgPath.default} className='piece' alt="piece"/>
            </div>
        </>
    )
}

export default Piece
