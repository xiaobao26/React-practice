import Square from "./1-Square";


function calculateWinner(squares) {
    // each line in the result is won index
    const results = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < results.length; i++) {
        const [a, b, c] = results[i];
        //  XXX or OOO
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


export default function Board({ xIsNext, squares, onPlay}) {
    // const [squares, setSquares] = useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    function handleClick(i) {
        // check whether the square fill in
        // or already finished
        if (squares[i] || calculateWinner(squares)) {
            return
        };

        const nextSquares = squares.slice(); // except output: ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null']
        xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O';
        // for next Board
        onPlay(nextSquares);

    }

    return (
        <>
            <div className="status">{status}</div>
            <div className='board-row'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>

            <div className='board-row'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>

            <div className='board-row'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    )
}