import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { gameSubject, handleMove } from "../../helper/game/game";
import Piece from "../piece/Piece";
import Promote from "../promotion/Promote";
import Sqaure from "../sqaure/Sqaure";

function BoardSqaure({ piece, black, position, clickCheck, nextMove, resetNextMoveAarry }) {
    const [promotion, setPromotion] = useState(null);

    const [, drop] = useDrop({
        accept: "piece",
        drop: (item) => {
            const [fromPosition] = item.id.split("_");
            handleMove(fromPosition, position);
            resetNextMoveAarry();
        },
    });

    useEffect(() => {
        const subscribe = gameSubject.subscribe(({ pendingPromotion }) =>
            pendingPromotion && pendingPromotion.to === position
                ? setPromotion(pendingPromotion)
                : setPromotion(null)
        );
        return () => subscribe.unsubscribe();
    }, [position]);



    return (
        <div className="board-sqaure" ref={drop} onClick={clickCheck}>
            <Sqaure black={black} nextMove={nextMove}>
                {promotion ? (
                    <Promote promotion={promotion} />
                ) : piece ? (
                    <Piece piece={piece} position={position} />
                ) : null}
            </Sqaure>
        </div>
    );
}

export default BoardSqaure;
