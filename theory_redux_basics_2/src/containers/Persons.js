import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    render () {
        const newPerson = {
          id: Math.random(),
          name: 'Test',
          age: Math.floor( Math.random() * 40 )
        }
        return (
            <div>
                <AddPerson personAdded={() => this.props.personAddedHandler(newPerson)} />
                { this.props.persons.map(person => (
                  <Person 
                      key={person.id}
                      name={person.name} 
                      age={person.age} 
                      clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      persons: state.persons
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      personAddedHandler: (newPerson) => dispatch({type: actionTypes.ADD, newPerson}),
      personDeletedHandler: (id) => dispatch({type: actionTypes.DELETE, personId: id})
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
