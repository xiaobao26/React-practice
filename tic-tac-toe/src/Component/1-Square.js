
export default function Square({ value, onSquareClick }) {
    return (
        <>
            <button className="square" onClick={onSquareClick} style={{width: 33, height: 33}}>{value}</button>
        </>
    )
}