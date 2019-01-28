import React from 'react';

function ScoreBoard(props) {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">Memory Game - NBA Edition</h1>
            <p>Click each picture one time!</p>
            <div className="row">
                <div className="col-sm-4">
                    <h3>Score: <span>{props.score}</span></h3>
                </div>
                <div className="col-sm-4">
                    <h1>{props.result}</h1>        
                </div>
                <div className="col-sm-4">
                    <h3>Top Score: <span>{props.topScore}</span></h3>  
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard;