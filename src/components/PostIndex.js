import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import {bindActionCreators} from "redux";

class PostIndex extends Component {
    constructor(props){
        super(props);
        this.renderPosts = this.renderPosts.bind(this);
    }
    componentWillMount(){
        this.props.fetchPosts();
    }
    renderPosts () {
        const {posts} = this.props;
        if(Object.keys(posts).length > 0){
            return (
                posts.map((post,i) => {
                        return(
                            <div key={i}>
                                id: {post.id} <br />
                                categories: {post.categories} <br />
                                content: {post.content} <br />
                                <hr />  
                            </div>
                            
                        )     
                })
            )
        }
        return <div>Hello</div>;
    }
    render(){
        return (
            <div>
                {this.renderPosts()}
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
   
    return bindActionCreators({fetchPosts:fetchPosts}, dispatch);
    // dispatch function takes all of our actions and passes them to all the other reducers
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);