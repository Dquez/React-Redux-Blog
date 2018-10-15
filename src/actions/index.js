import axios from "axios";
const API_KEY = "?key=dquez";
const ROOT_URL = "http://reduxblog.herokuapp.com/api/posts";
// action creators always have to return an action, and actions always have to have a type property

// variables to be imported and used in our reducers switch statement, instead of hard coding a string
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const SUBMIT_POST = 'SUBMIT_POST';
export const DELETE_POST = 'DELETE_POST';

// function to create an ajax request for posts associated with api key
export function fetchPosts () {
    const request = axios.get(ROOT_URL + API_KEY);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

// function to create an ajax request to submit a post associated with api key, takes an object to post to server
export function submitPost (post, callback) {
    const request = axios.post(ROOT_URL + API_KEY, post).then(()=> {
        callback();
    })
    return {
        type: SUBMIT_POST,
        payload: request
    }
}

// function to create an ajax request for one post associated with id
export function fetchPost (id) {
    const request = axios.get(`${ROOT_URL}/${id}${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}

// function to create an ajax request for one post associated with id
export function deletePost (id, callback) {
    const request = axios.delete(`${ROOT_URL}/${id}${API_KEY}`).then(()=>{
        // callback invoked once data is deleted from backend, which sets user's url to the root url
        callback();
    })
    return {
        type: DELETE_POST,
        payload: id
    }
}