import React from 'react';
import './Input.css';

export const Input = (props) => {

    let guessedLetter = props.guessedLetter
    
    const handleChange = (e) => {
        guessedLetter = props.guessedLetter
        console.log(guessedLetter)
    }

    return (
        <form>
            <input className="Input" value={props.guessedLetter} onChange={handleChange}></input>
        </form>
    )
}