import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import {reducer as formReducer} from 'redux-form';

// link all reducers to a single root reducer, to create the redux store

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;