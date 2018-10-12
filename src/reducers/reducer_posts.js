import {FETCH_POSTS} from "../actions";
import {SUBMIT_POST} from "../actions";
import _ from "lodash";
// state argument is not application state, only the state this reduce is responsible for
export default function (state = {}, action) {
    switch(action.type){
        case FETCH_POSTS:
            const dataObj = _.mapKeys(action.payload.data, "id");
            return dataObj;
        case SUBMIT_POST:
            return action.payload;
    }

    return state;
}