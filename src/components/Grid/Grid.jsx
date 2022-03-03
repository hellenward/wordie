import React from 'react'; 
import {Row} from '../Row/Row'
import './Grid.css';

export const Grid = (props) => {
    return (
        <div className="grid">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    )
}