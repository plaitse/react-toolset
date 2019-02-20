import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout';
import Layout from '../hoc/Layout/Layout';
import Orders from './Orders/Orders';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout} />
            {/* <BurgerBuilder /> */}
            <Route path='/orders' component={Orders} />
            <Route path='/' exact component={BurgerBuilder} />
            {/* <Checkout /> */}
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
