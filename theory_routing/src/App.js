import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

// Default config
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Requests
axios.interceptors.request.use(request => {
  console.log({request});
  // Edit the request and then return it
  return request;
}, error => {
  console.log({error});
  return Promise.reject(error);
});

// Responses
axios.interceptors.response.use(response => {
  console.log({response});
  // Edit the request and then return it
  return response;
}, error => {
  console.log({error});
  return Promise.reject(error);
});

class App extends Component {
  render() {
    return (
      <BrowserRouter basename='/my-app'>
        <div className='App'>
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
