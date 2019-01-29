export const signin = (credentials)=>(
    (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(credentials.email,credentials.password)
        .then(
            ()=>(dispatch({type: 'login_success'})))
        .catch((err)=>(
            dispatch({type: 'login_err',err})));
    }
);

export const signout = ()=> (
    (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(
            ()=>(dispatch({type: 'signout_success'})))
        .catch((err)=>(
            dispatch({type: 'signout_err',err})));
    }
);

export const signup = (newUser)=>(
    (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(newUser.email,newUser.password)
        .then((res)=>{
            firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0].toUpperCase()+newUser.lastName[0].toUpperCase()
            })
        })
        .then(()=>dispatch({type: 'signup_success'}))
        .catch((err)=>(
            dispatch({type: 'signup_err',err})));
    }
);