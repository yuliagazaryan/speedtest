import React from 'react';

const Circle = (props) => {
    return (
        <div className={`circle ${props.color} ${props.active ? "active" : ""}`}
        onClick={props.click}> <p>{props.id}</p></div>
    );
};

export default Circle;