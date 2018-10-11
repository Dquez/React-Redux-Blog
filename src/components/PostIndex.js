import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
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
        // if(Object.keys(posts).length > 0){
            return (
                 _.map(posts, (post) => {
                        return(
                            <li key={post.id}>
                                id: {post.id} <br />
                                categories: {post.categories} <br />
                                content: {post.content} <br />
                                <hr />  
                            </li>
                            
                        )     
                })
            )
        // }
    }
    render(){
        return (
            <div>
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