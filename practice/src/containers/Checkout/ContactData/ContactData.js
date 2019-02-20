import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './ContactData.module.css';

class contactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Pablo Rblt',
        address: {
          street: 'Test',
          zipCode: '787878',
          country: 'Spain'
        },
        email: 'pablorblt@gmail.com'
      },
      deliveryMethod: 'fastest'
    }

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
        console.log({response});
      })
      .catch(error => {
        this.setState({loading: false});
        console.log({error})
      });
  }

  render () {
    let form = (
      <form>
        <input className={styles.Input} type='text' name='name' placeholder='Your name' />
        <input className={styles.Input} type='email' name='email' placeholder='Your email' />
        <input className={styles.Input} type='text' name='street' placeholder='Your street' />
        <input className={styles.Input} type='text' name='postal' placeholder='Your postal code' />
        <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) form = <Spinner />;
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default contactData;
