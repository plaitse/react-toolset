import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <button
                onClick={props.clicked}>Toogle Persons</button>
        </div>
    );
}

export default cockpit;