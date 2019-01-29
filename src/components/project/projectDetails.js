import React from 'react';
import {connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import moment from 'moment';

const ProjectDetails = (props)=>{
    const {project,auth} = props;
    if(!auth.uid) props.history.push("/login");
    if(project){
        return (
        <div className=" container section">
            <div className="card">
                <div className="card-content">
                    <p className="card-title">Project Title: <b>{project.title}</b></p>
                    <p>{project.content}</p>
                </div>
                <div className="card-action">
                    <p>By: <b>{project.authorFirstname} {project.authorLastname}</b></p>
                    <p>Dated: <b>{moment(project.created.toDate()).calendar()}</b></p>
                </div>
            </div>
        </div>
        );
    }else{
        return (<p className="center">Loading...</p>);
    }
};

const mapStateToProps = (state,ownProps)=>{
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project,
        auth: state.firebase.auth
    };
};

export default compose(
        connect(mapStateToProps),
        firestoreConnect([{
            collection: 'projects'
        }])
    )(ProjectDetails);