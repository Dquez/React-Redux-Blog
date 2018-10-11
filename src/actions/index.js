import axios from "axios";
const API_KEY = "dquez";
const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts`;
// action creators always have to return an action, and actions always has to have a type property

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts () {
    const request = axios.get(ROOT_URL);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}