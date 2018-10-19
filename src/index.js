import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PostIndex from './components/PostIndex';
import NewPost from './components/NewPost';
import Post from './components/Post';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
// create a single Redux store, with Redux Proimse acting as a gatekeeper for when a payload is attached to a action, it will handle asychronous calls so that payloads are returned after they finish loading their data
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  // data returned from reducers acts as redux store
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          {/* Always use most specific route first because switch will match component to first matching path */}
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:id"  component={Post} />
          <Route path="/"  component={PostIndex} />
          
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
