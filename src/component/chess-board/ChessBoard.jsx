import React, { useEffect, useState } from 'react'
import BoardSqaure from '../board-sqaure/BoardSqaure'
import './ChessBoard.css'


function ChessBoard({ board, turn }) {
    const [currBoard, setCurrBoard] = useState([])
    useEffect(() => {
        setCurrBoard(
            turn === 'w' ? board.flat() : board.flat().reverse()
        )
    }, [board, turn])

    function getXYPosition(i) {
        const x = turn === 'w' ? i % 8 : Math.abs((i % 8) - 7)
        const y =
            turn === 'w'
                ? Math.abs(Math.floor(i / 8) - 7)
                : Math.floor(i / 8)
        return { x, y }
    }

    function isBlack(i) {
        const { x, y } = getXYPosition(i)
        return (x + y) % 2 === 1
    }

    function getPosition(i) {
        const { x, y } = getXYPosition(i)
        const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][
            x
        ]
        return `${letter}${y + 1}`
    }

    return (
        <div className="board">
            {currBoard.map((piece, i) => (
                <div key={i} className="sqaure">
                    <BoardSqaure
                        piece={piece}
                        black={isBlack(i)}
                        position={getPosition(i)} />
                </div>
            ))}
        </div>
    )
}

export default ChessBoard
