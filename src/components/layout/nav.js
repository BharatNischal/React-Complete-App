import React from 'react';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({auth,profile})=>{
    const links = auth.uid? <SignedInLinks profile={profile}/>: <SignedOutLinks />;
    return (
        <nav className="grey darken-2">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo" style={{marginLeft:"10px"}}>PROJECT</Link>
                {links}
            </div>
        </nav>
        );
};

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    };
};

export default connect(mapStateToProps)(Nav);