import {NavLink } from 'react-router-dom';
import React from 'react';


const SignedOutLinks = ()=>{
    return (
        <ul className="right">
            <li><NavLink to="/signup" >Sign Up</NavLink></li>
            <li><NavLink to="/login">LogIn</NavLink></li>
        </ul>
        );
};



export default SignedOutLinks;