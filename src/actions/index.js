import axios from "axios";
const API_KEY = "?key=dquez";
const ROOT_URL = "http://reduxblog.herokuapp.com/api/posts";
// action creators always have to return an action, and actions always have to have a type property

// variables to be imported and used in our reducers switch statement, instead of hard coding a string
export const FETCH_POSTS = 'FETCH_POSTS';
// export const SUBMIT_POST = 'SUBMIT_POST';

// function to create an ajax request for posts associated with api key
export function fetchPosts () {
    const request = axios.get(ROOT_URL + API_KEY);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

// // function to create an ajax request to submit a post associated with api key, takes an object to post to server
// export function submitPost (post) {
//     const request = axios.post(ROOT_URL + API_KEY, post);
//     return {
//         type: SUBMIT_POST,
//         payload: request
//     }
// }