import React from 'react';

import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

const person = (props) => {
    return (
        <WithClass classes={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.value}></input>
        </WithClass>
    )
};

export default person;