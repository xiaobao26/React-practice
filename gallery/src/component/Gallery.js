import { sculptureList } from './data';
import { useState } from 'react';


export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const range = sculptureList.length - 1;
    let sculpture = sculptureList[index];

    function handleNextClick() {
        if (index < range) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleShow() {
        setShowMore(!showMore);
    }

    return (
        <>
            <button onClick={handleNextClick}>Next</button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>({index + 1} of {range + 1})</h3>
            <button onClick={handleShow}>{showMore ? 'hide' : 'show'} details</button>
            <br/>
            <br/>
            {/* if showMore then <p>{sculpture.description}</p> */}
            {showMore && <p>{sculpture.description}</p>}
            <img src={sculpture.url} alt={sculpture.alt}/>
        </>
    )
}