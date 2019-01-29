const projectReducer = (state={},action)=>{
    switch(action.type){
        case 'create_project': {console.log(action.project);
            break;}
        case 'create_project_err': {console.log(action.err);
            break;}
        default : return state;
    }
    return state;
};

export default projectReducer;