const createProject = (project)=>(
    (dispatch,getState,{getFirebase,getFirestore})=>{
        const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstname: profile.firstName,
            authorLastname: profile.lastName,
            created: new Date(),
            authorId: userId
        }).then(()=>dispatch({type: 'create_project',project}))
        .catch((err)=>dispatch({type: 'create_project_err',err}));
    }
);

export default createProject;