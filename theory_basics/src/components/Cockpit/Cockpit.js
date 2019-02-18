import React, { useEffect } from 'react';

const cockpit = (props) => {
    // Combine componentDidMount + componentDidUpdate
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
    }, [props.persons]);

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <button
                onClick={props.clicked}>Toogle Persons</button>
        </div>
    );
}

export default cockpit;