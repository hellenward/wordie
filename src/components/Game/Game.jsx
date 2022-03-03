import React from 'react';
import {Grid} from '../Grid/Grid';
import {Input} from '../Input/Input';
import './Game.css'

export const Game = () => {
    return (
        <>
            <Grid />
            <p className="Guess-question">What's your guess?</p>
            <div className="guess-container">
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
            </div>
        </>
    )
}