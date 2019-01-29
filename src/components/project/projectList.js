import React from 'react';
import { Link} from 'react-router-dom';
import moment from 'moment';

const ProjectList = (props)=>{
    let projects = <p>No Projects Right Now</p>;
    if(props.projects && props.projects.length>0){
        projects = props.projects.map((p)=>(
                <div className="card" key={p.id}>
                    <div className="card-content">
                        <p className="card-title">{p.title}</p>
                    </div>
                    <div className="card-action">
                        <p>By <b>{`${p.authorFirstname} ${p.authorLastname}`}</b></p>
                        <p>Dated: <b>{moment(p.created.toDate()).calendar()}</b> </p>
                    </div>
                    <Link to={'/project/'+ p.id} style={{position:'relative',left:'20px',bottom:'10px'}}>See more </Link>
                </div>
        ));
    }
    
    return (
        <div className="section">
            {projects}
        </div>
        );
};

export default ProjectList;