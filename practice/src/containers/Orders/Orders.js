import React, { Component } from 'react';
import axios from '../../axios-orders';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  // state = {
  //   orders: [],
  //   loading: true
  // }

  componentDidMount() {
    // axios.get('/orders.json')
    //   .then(response => {
    //     const fetchedOrders = [];
    //     for (let key in response.data) {
    //       fetchedOrders.push({
    //         ...response.data[key],
    //         id: key
    //       });
    //     }
    //     console.log({response});
    //     console.log({fetchedOrders});

    //     this.setState({loading: false, orders: fetchedOrders});
    //   })
    //   .catch(err => {
    //     this.setState({loading: false});
    //   });
    console.log('@@@@tst');
    this.props.onFetchOrders();
  }

  render () {
    let orders = <Spinner />;
    console.log('this.props.orders : ', this.props.orders);
    console.log('loading : ', this.props.loading);
    if ( !this.props.loading ) {
      console.log('this.props.orders : ', this.props.orders);
      orders = this.props.orders.map( order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price} />
      ))
    }
    return (
      <div>
          {orders}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      orders: state.order.orders,
      loading: state.order.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchOrders: () => dispatch( actions.fetchOrders() )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
