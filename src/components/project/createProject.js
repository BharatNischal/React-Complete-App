import React , {Component } from 'react';
import createProject from '../../store/actions/projectActions';
import {connect } from 'react-redux';

class Signin extends Component{
    constructor(props){
        super(props);
        this.state = {
        title:"",
        content:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.createProject(this.state);
        e.target.reset();
    }
    
    render(){
        if(!this.props.auth.uid) this.props.history.push('/login');
        return (
            <div className="row container">
                <form className="col s12" onSubmit={this.handleSubmit}>
                <h4>Create Project</h4>
                <div className="row">
                        <div className="input-field col s12">
                            <input id="title" type="text" className="validate" name="title" onChange={this.handleChange} value={this.state.email}/>
                            <label htmlFor="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" name="content" onChange={this.handleChange}></textarea>
                            <label htmlFor="textarea1">Textarea</label>
                        </div>
                    </div>
                     <button className="btn waves-effect waves-light" type="submit" name="action">Create</button>
                </form>
            </div>
            );
    }
}

const mapStateToProps = (state)=>({
    auth: state.firebase.auth
});

const mapDispatchToProps = (dispatch)=>({
    createProject: (project)=>dispatch(createProject(project))
});

export default connect(mapStateToProps,mapDispatchToProps)(Signin);