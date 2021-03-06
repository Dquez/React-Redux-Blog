import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
// reduxForm upgrades NewPost component to container which has access to redux store
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {submitPost} from "../actions/index";

class NewPost extends Component {

    renderField (field) {
        // destructuring on nested objects
        const {meta : {touched, error}} = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                className="form-control"
                type="text"
                // grab all properties on field input obj to hook up field component to redux form
               {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ""}    
                </div>
                
            </div>
        )

    }
    onSubmit(values) {
        this.props.submitPost(values, ()=> {
            // callback to redirect user after successful post deletion
            this.props.history.push("/");
        });
    }
    render(){
        const {handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    name="title"
                    label="Title"
                    // Field responsible for handling state and validation but we have to create the visible component using react
                    component={this.renderField}
                />
                <Field 
                    name="categories"
                    label="Categories"
                    component={this.renderField}
                />
                <Field 
                    name="content"
                    label="Post Content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/posts" className="btn btn-danger">
                   Cancel
                </Link>
            </form>
        )
    }
}

function validate (values){
    const errors = {}
    // if errors is empty, form is fine to submit
    // if errors has any properties, redux form assumes form is invalid
    // IMPORTANT, values.title is associated with name property on the Field component
    if (!values.title){
        errors.title = "Enter a title!";
    }
    if (!values.categories){
        errors.categories = "Enter some categories!";
    }
    if (!values.content){
        errors.content = "Enter content!";
    }
    return errors;
}

export default reduxForm ({
    validate,
    form: 'NewPostForm'
})(
    // because we're using redux form, we need to still connect our component to hook it up to redux as a container with access to submit post action creator
    connect(null, {submitPost})(NewPost)
    )
