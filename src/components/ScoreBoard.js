import React from 'react';

function ScoreBoard(props) {
    return (
        <div>
            <h1>Score: <span>{props.score}</span></h1>
            <h1>Top Score: <span>{props.topScore}</span></h1>
            <h1>{props.result}</h1>
        </div>
    )
}

export default ScoreBoard;