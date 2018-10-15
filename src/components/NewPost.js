import React, {Component} from "react";
import { connect } from "react-redux";
import { submitPost } from "../actions";
// connect upgrades NewPost component to container which has access to redux store

class NewPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            "title": "",
            "categories": "",
            "content": ""
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        })
    }
    onFormSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.props.submitPost({...this.state})
        this.setState({
            title: "",
            categories: "",
            content: ""
        })
    }


    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="title" 
                        placeholder="Enter a title"
                        onChange={this.onInputChange}
                        value={this.state.title}
                     />
                    
                </div>
                <div className="form-group">
                <label htmlFor="category">Category</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="categories" 
                        placeholder="Enter a category" 
                        onChange={this.onInputChange}
                    />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea 
                        className="form-control" 
                        name="content" 
                        rows="3"
                        onChange={this.onInputChange}>
                    </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}




// adding destructured method as a prop on NewPost component
export default connect(null, {submitPost})(NewPost);
