import React from 'react';

function ScoreBoard(props) {
    return (
        <div className="jumbotron text-center text-white">
            <h2>Memory Game - NBA Edition</h2>
            <p>Click each picture one time!</p>
            <div className="row">
                <div className="col-sm-4">
                    <h4>Score: <span>{props.score}</span></h4>
                </div>
                <div className="col-sm-4">
                    <h4>{props.result}</h4>
                </div>
                <div className="col-sm-4">
                    <h4>Top Score: <span>{props.topScore}</span></h4>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard;