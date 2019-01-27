import React from 'react';
import './style.css';

function Board(props) {
    return <div className="container game-board">{props.children}</div>;
}

export default Board