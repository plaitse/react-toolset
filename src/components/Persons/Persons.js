import React, { Component }  from 'react';

/* Components */
import ErrorBoundary from '../../hoc/ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.j] Inside constructor ', props);
    }

    componentWillMount() {
        console.log('[Persons.j] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.j] Inside componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
        // return false; -> stop the process
        // return true; -> continue the process
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[Persons.j] Inside componentDidUpdate');
    }

    render() {
        console.log('[Persons.j] Inside render');
        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)} />
            </ErrorBoundary>
        });
    }
}
 
export default Persons;