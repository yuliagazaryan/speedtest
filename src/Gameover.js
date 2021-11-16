import React from 'react';

const Gameover = (props) => {
    return (
        <div id="container">
        <div id="gameover">
            <h2>Game over</h2>
            <p>Your score was: {props.score}</p>
            <button onClick={props.close}>X</button>
        </div>
        </div>
    );
};

export default Gameover;