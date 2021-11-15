import React from 'react';

const Circle = (props) => {
    return (
        <div className={`circle ${props.color}`} onClick={props.click}> <p>{props.id}</p></div>
    );
};

export default Circle;