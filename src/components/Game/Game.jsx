import React, {useState} from 'react';
import {Grid} from '../Grid/Grid';
import {Input} from '../Input/Input';
import './Game.css'

export const Game = () => {

    const [guess, setGuess] = useState()

    const handleOnKeyUp = (value, key) => {
        console.log(value, key)
        setGuess({key: key, guess: value})
        console.log('guess', guess)
    }

    const guessedLetter = (key) => guess.filter(guess => guess.key === key)


    return (
        <>
            <Grid />
            <p className="Guess-question">What's your guess?</p>
            <div className="guess-container">
                <Input key="1" onKeyUp={(e, key) => handleOnKeyUp(e.target.value, key)} value={(key) => guessedLetter(key)}/>
                <Input key="2" />
                <Input key="3" />
                <Input key="4" />
                <Input key="5" />
            </div>
        </>
    )
}