<<<<<<< HEAD:src/components/Persons/Person/Person.js
import React, { Component } from 'react';
=======
import React from 'react';

>>>>>>> 21498b3affc3cee9465a10094133f38b7cf4203d:theory/src/components/Persons/Person/Person.js
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

<<<<<<< HEAD:src/components/Persons/Person/Person.js
class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.j] Inside constructor ', props);
    }

    componentWillMount() {
        console.log('[Person.j] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.j] Inside componentDidMount');
    }

    render() {
        console.log('[Person.j] Inside render');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age}!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.value}></input>
            </div>
        )
    }   
}

export default Person;
=======
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
>>>>>>> 21498b3affc3cee9465a10094133f38b7cf4203d:theory/src/components/Persons/Person/Person.js
