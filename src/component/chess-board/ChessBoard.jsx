import React, { useEffect, useState } from "react";
import { getNextMoves, isCheck } from "../../helper/game/game";
import BoardSqaure from "../board-sqaure/BoardSqaure";
import "./ChessBoard.css";

function ChessBoard({ board, turn }) {
    const [currBoard, setCurrBoard] = useState([]);
    const [nextMovesList, setNextMovesList] = useState([])

    useEffect(() => {
        setCurrBoard(turn === "w" ? board.flat() : board.flat().reverse());
    }, [board, turn]);

    function getXYPosition(i) {
        const x = turn === "w" ? i % 8 : Math.abs((i % 8) - 7);
        const y =
            turn === "w" ? Math.abs(Math.floor(i / 8) - 7) : Math.floor(i / 8);
        return { x, y };
    }

    function isBlack(i) {
        const { x, y } = getXYPosition(i);
        return (x + y) % 2 === 1;
    }

    function getPosition(i) {
        const { x, y } = getXYPosition(i);
        const letter = ["a", "b", "c", "d", "e", "f", "g", "h"][x];
        return `${letter}${y + 1}`;
    }

    const clickCheck = (pos) => {
        console.log('works', pos);
        setNextMovesList([])
        setNextMovesList(getNextMoves(pos))
    }

    const resetNextMoveAarry = () => {
        setNextMovesList([])
    }

    function isGreen(i) {
        const currentPos = getPosition(i)
        let isGreenBool = false;
        nextMovesList.forEach((moveRef) => {
            if (moveRef.substr(moveRef.length - 2) === currentPos) {
                console.log(moveRef, moveRef.substr(moveRef.length - 2), currentPos);
                isGreenBool = true;
            }
        })
        return isGreenBool;
    }

    return (
        <div className="board">
            {currBoard.map((piece, i) => (
                <div key={i} className="sqaure">
                    <BoardSqaure
                        piece={piece}
                        nextMove={isGreen(i)}
                        black={isBlack(i)}
                        position={getPosition(i)}
                        resetNextMoveAarry={resetNextMoveAarry}
                        clickCheck={() => clickCheck(getPosition(i))}
                        isCheck={isCheck(i)}
                        turn={turn}
                    />
                </div>
            ))}
        </div>
    );
}

export default ChessBoard;
