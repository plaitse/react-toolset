import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';

class Blog extends Component {
  render () {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li><NavLink to='/' exact>Home</NavLink></li>
              <li><NavLink to='/new-post'>New Post</NavLink></li>
              <li><Link to='/test'>Test</Link></li>
              <li><Link to={{
                pathname: '/test2',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>Test 2</Link></li>
            </ul>
          </nav>
        </header>
        {/* <Route path='/' exact render={() => <h1>Home</h1>} />
        <Route path='/' render={() => <h1>Home 2</h1>} /> */}
        <Route path='/test' exact component={NewPost} />
        <Switch>
          <Route path='/new-post' component={NewPost} />
          {/* <Route path='/:id' exact component={FullPost} /> */}
          <Route path='/' component={Posts} />
        </Switch>
        <Route path='/test2' component={NewPost} />
      </div>
    );
  }
}

export default Blog;
