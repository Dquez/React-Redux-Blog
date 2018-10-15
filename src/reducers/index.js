import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

// link all reducers to a single root reducer, to create the redux store

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;