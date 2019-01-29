import React , {Component } from 'react';
import ProjectList from '../project/projectList';
import Notification from './notification';
import {connect } from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';

class Dashboard extends Component{
    
    render(){
    
        const {projects} = this.props;
        return (
            <div className="container">
                <div className="row"> 
                    <div className="col m6 s12">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col m5 s12 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
            );
    }
}

const mapStateToProps = (state)=>{
    return {projects: state.firestore.ordered.projects};
};

export default compose(connect(mapStateToProps,null),
                        firestoreConnect([{collection: 'projects'}])
                      )(Dashboard);