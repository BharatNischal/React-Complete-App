import React , {Component } from 'react';
import {connect} from 'react-redux';
import {signup} from '../../store/actions/authActions';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
        email:"",
        password:"",
        firstName:"",
        lastName:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.signUp(this.state);
        e.target.reset();
    }
    
    render(){
        if(this.props.auth.uid) this.props.history.push('/');
        return (
            <div className="row container">
                <form className="col s12" onSubmit={this.handleSubmit}>
                <h4>Sign Up</h4>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="firstName" type="text" className="validate" name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
                            <label htmlFor="firstName">First Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="lastName" type="text" className="validate" name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
                            <label htmlFor="lastName">lastname</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" name="email" onChange={this.handleChange} value={this.state.email}/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                          <input id="password" type="password" className="validate" name="password" onChange={this.handleChange} value={this.state.password}/>
                          <label htmlFor="password">Password</label>
                        </div>
                     </div>
                     <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </form>
                <div className="container">
                    {this.props.authError? <p className="center red-text">{this.props.authError}</p> : null}
                </div>
            </div>
            );
    }
}

const mapStateToProps =(state)=>({
    auth : state.firebase.auth        
});

const mapDispatchToProps = (dispatch)=>({
    signUp: (newUser)=>dispatch(signup(newUser))
});

export default connect(mapStateToProps,mapDispatchToProps)(Signup);