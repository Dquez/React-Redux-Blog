import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchPost, deletePost} from "../actions";

class Post extends Component {

    componentDidMount () {
        // destructured id from url "/posts/32134"
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }
    onDeleteClick () {
        const {id} = this.props.match.params;
        this.props.deletePost(id, ()=> {
            this.props.history.push("/");
        });
    }
    render(){
        const {post} = this.props;
        // check if post exists yet in props, which it wont during initial fetch request execution
        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/" className="btn btn-success"> Back to index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                Delete post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }

}

function mapStateToProps({posts}, ownProps){
    return {
        // this.props === ownProps
        post: posts[ownProps.match.params.id]
    };
}

// fetchPost and deletePost are destructured methods, now hooked up to redux and available as props
export default connect(mapStateToProps, {fetchPost, deletePost})(Post);