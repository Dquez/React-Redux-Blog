import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import { Link } from "react-router-dom";
import _ from "lodash"; 

class PostIndex extends Component {
    constructor(props){
        super(props);
        this.renderPosts = this.renderPosts.bind(this);
    }
    componentDidMount(){
        this.props.fetchPosts();
    }
    renderPosts () {
        const {posts} = this.props;
        // check length of object, but since we're using lodash, it won't return undefined for an empty object
        // if(Object.keys(posts).length > 0)
            return (
                 _.map(posts, (post) => {
                        return(
                            <li key={post.id}>
                                id: {post.id} <br />
                                Title: {post.title} <br />
                                Categories: {post.categories} <br />
                                Content: {post.content} <br />
                                <hr />  
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

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps, {fetchPosts})(PostIndex);