import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route} from "react-router-dom";
import PostIndex from './components/PostIndex';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <Route path="/" exact component={PostIndex} />
    </div>
    
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
