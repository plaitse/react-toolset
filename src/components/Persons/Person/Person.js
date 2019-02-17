import React, { Component } from 'react';
import classes from './Person.css';

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