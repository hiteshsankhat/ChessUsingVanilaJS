import React from 'react'
import { move } from '../../helper/game/game'
import Sqaure from '../sqaure/Sqaure'
import './Promote.css'

const promotionPieces = ['r', 'n', 'b', 'q']

function Promote({ promotion: { from, to, color }, }) {
    return (
        <div className="board">
            {promotionPieces.map((p, i) => (
                <div key={i} className="promote-square">
                    <Sqaure black={i % 3 === 0}>
                        <div
                            className="piece-container"
                            onClick={() => move(from, to, p)}
                        >
                            <img
                                src={require(`./../../assets/${p}_${color}.png`).default}
                                alt=""
                                className="piece cursor-pointer"
                            />
                        </div>
                    </Sqaure>
                </div>
            ))}
        </div>
    )
}

export default Promote