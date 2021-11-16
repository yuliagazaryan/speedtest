import React from 'react';

const Circle = (props) => {
    return (
        <div className={`circle ${props.color} ${props.active ? "active" : ""}`}
        onClick={props.click}> </div>
    );
};

export default Circle;