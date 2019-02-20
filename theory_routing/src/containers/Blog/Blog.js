import React, { Component, Suspense } from 'react';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

import asyncComponent from '../../hoc/asyncComponent';
import './Blog.css';
// import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';

// Loading routes lazily, asynchronously before React v16.6 -> it call 1.chunk.js in Network
const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});
// New way of doing it from React v16.6 + Suspense component
// const Posts = React.lazy(() => import('./Posts/Posts'));

class Blog extends Component {
  state = {
    auth: false
  }
  render () {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li><NavLink to='/posts' exact>Home</NavLink></li>
              <li><NavLink to='/new-post'>New Post</NavLink></li>
              <li><Link to='/new-post'>Test</Link></li>
              <li><Link to={{
                pathname: '/test2',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>Protected route</Link></li>
            </ul> 
          </nav>
        </header>
        {/* <Route path='/' exact render={() => <h1>Home</h1>} />
        <Route path='/' render={() => <h1>Home 2</h1>} /> */}
        {/* <Route path='/test' exact component={NewPost} /> */}
        <Switch>
          <Route path='/new-post' component={AsyncNewPost} />
          {/* <Route path='/:id' exact component={FullPost} /> */}
          <Route path='/posts' component={Posts} />
          {/* <Route path='/posts' render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <Posts />
            </Suspense>
          )} /> */}
          {/* <Redirect from='/' to='/posts' /> */}
          <Route render={() => <h1>Not found</h1>} />
          {/* <Route path='/' component={Posts} /> */}
        </Switch>
        {this.state.auth ? <Route path='/test2' component={AsyncNewPost} /> : null}
      </div>
    );
  }
}

export default Blog;
