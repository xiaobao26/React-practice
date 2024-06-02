import Board from "./2-Board";
import { useState } from "react";
import './style.css'

export default function Game() {
    // now the history is only one array: [null, null, null, null, null, null, null, null, null],
    // history array is like:
    /**
     * 
    [
        // Before first move
        [null, null, null, null, null, null, null, null, null],
        // After first move
        [null, null, null, null, 'X', null, null, null, null],
        // After second move
        [null, null, null, null, 'X', null, null, null, 'O'],
        // ...
    ]
     */
    // That's why only need the last array

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];


    // update the Board
    // need current Board, xIsNext, how to next change the Board
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    // const moves = history.map((squares, index) => {
    //     let description;
    //     if (index > 0) {
    //         description = `Go to move # ${index}`;
    //     } else {
    //         description = 'Go to move game start';
    //     }
    //     return (
    //         <li key={index}>
    //             <button onClick={() => jumpTo(index)}>{description}</button>
    //         </li>
    //     )
    // })

    function moves(history) {
        return history.map((squares, index) => {
            let description;
            if (index > 0) {
                description = `Go to move # ${index}`;
            } else {
                description = 'Go to game start';
            }
            return (
                <li key={index}>
                    <button onClick={() => jumpTo(index)}>{description}</button>
                </li>
            );
        });
    }

    return (
        <div className="game">
            <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>

            <div className="game-info">
                <ol>
                    {moves(history)}
                </ol>
            </div>
        </div>
    )
}