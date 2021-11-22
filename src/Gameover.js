import React from 'react';

const Gameover = (props) => {
    return (
        <div id="container">
        <div id="gameover">
        <button onClick={props.close}>X</button>
            <h2>Game over</h2>
            <p>Your score was: {props.score}</p>
        </div>
        </div>
    );
};

export default Gameover;