import {FETCH_POSTS, FETCH_POST, DELETE_POST} from "../actions";
import _ from "lodash";
// state argument is not application state, only the state this reduce is responsible for
export default function (state = {}, action) {
    switch(action.type){
        case FETCH_POSTS:
        // set up an object of objects, in which the keys("id") correspond to each "post" object
            const dataObj = _.mapKeys(action.payload.data, "id");
            return dataObj;
        case FETCH_POST:
            // const post = action.payload.data; 
            // const newState = {...state};
            // newState[post.id] = post
            // return newState
            return {...state, [action.payload.data.id]: action.payload.data}
        case DELETE_POST:
            return _.omit(state, action.payload);

    }

    return state;
}