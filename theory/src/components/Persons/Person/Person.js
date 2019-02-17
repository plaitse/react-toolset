import React, { Component } from 'react';

import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

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
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age}!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.value}></input>
            </WithClass>
        )
    }   
}

export default Person;
