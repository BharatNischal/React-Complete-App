import {NavLink } from 'react-router-dom';
import React from 'react';
import {signout} from '../../store/actions/authActions';
import {connect } from 'react-redux';

const SignedInLinks = (props)=>{
    const handleSignOut = (e)=>{
        //e.preventDefault();
        props.signOut();
    };
    return (
        <ul className="right">
            <li><NavLink to="/create">Add Project</NavLink></li>
            <li><NavLink onClick={handleSignOut} to="/">LogOut</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
        </ul>
        );
};

const mapDispatchToProps = (dispatch)=>{
    return {
        signOut: ()=> dispatch(signout())
    };
};

export default connect(null,mapDispatchToProps)(SignedInLinks);