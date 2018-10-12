import axios from "axios";
const API_KEY = "?key=dquez";
const ROOT_URL = "http://reduxblog.herokuapp.com/api/posts";
// action creators always have to return an action, and actions always has to have a type property

export const FETCH_POSTS = 'FETCH_POSTS';
export const SUBMIT_POST = 'SUBMIT_POST';

export function fetchPosts () {
    const request = axios.get(ROOT_URL + API_KEY);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}
export function submitPost (post) {
    const request = axios.post(ROOT_URL + API_KEY, post);
    return {
        type: SUBMIT_POST,
        payload: request
    }
}