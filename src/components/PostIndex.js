import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import { Link } from "react-router-dom";
import _ from "lodash"; 
// connect upgrades PostIndex component to container which has access to redux store, grabs fetchPost method from action creators to include in redux state

class PostIndex extends Component {
    constructor(props){
        super(props);
        this.renderPosts = this.renderPosts.bind(this);
    }
    componentDidMount(){
        // when component mounts, create ajax request to retrieve all posts associated with api key
        this.props.fetchPosts();
    }
    renderPosts () {
        // grab posts object which is structured as { key : {post}}, refactored from an array using lodash
        const {posts} = this.props;
        // check length of object, but since we're using lodash, it won't return undefined for an empty object
        // if(Object.keys(posts).length > 0)
        // use lodash to iterate over object concisely
            return (
                 _.map(posts, (post) => {
                        return(
                            <li className="list-group-item" key={post.id}>
                                <Link to={`/posts/${post.id}`}>
                                    Title: {post.title} <br />
                                </Link>
                            </li>
                        )     
                })
            )
    }
    render(){
        return (
            <div>
                <div className="text-xs-right" >
                    <Link className="btn btn-primary" to="posts/new">
                    Add new post
                    </Link>
                </div>
                <h3>Posts</h3>
                    <ul className="list-group">
                    {this.renderPosts()}
                    </ul>
                
            </div>
        )
    }
}

// hook up redux state "props" to PostIndex's props as "this.props.posts"
function mapStateToProps(state){
    return {
        posts: state.posts
    }
}


// hook up state to props as well as fetchPosts method, which are now available on props object
export default connect(mapStateToProps, {fetchPosts})(PostIndex);