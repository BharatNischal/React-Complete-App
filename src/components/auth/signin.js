import React , {Component } from 'react';
import {connect } from 'react-redux';
import {signin} from '../../store/actions/authActions';

class Signin extends Component{
    constructor(props){
        super(props);
        this.state = {
        email:"",
        password:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.signIn(this.state);
        this.setState({email:"",
        password:""});
        if(this.props.auth.uid)
            this.props.history.push('/');
    }
    
    render(){
        if(this.props.auth.uid) this.props.history.push('/');
        return (
            <div className="row container">
                <form className="col s12" onSubmit={this.handleSubmit}>
                <h4>Sign in</h4>
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

const mapDispatchToProps = (dispatch)=>{
    return{
        signIn: (creds)=> dispatch(signin((creds)))
    };
};

const mapStateToProps = (state)=>(
    {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
);
export default connect(mapStateToProps,mapDispatchToProps)(Signin);