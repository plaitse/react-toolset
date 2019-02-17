import React from 'react';

import Aux from '../../hoc/Aux';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Aux>
    <Toolbar></Toolbar>
    <SideDrawer />
    <main className={styles.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;