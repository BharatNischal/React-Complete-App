const authReducer = (state={authError:null},action)=>{
    switch (action.type) {
        case 'login_success': 
            console.log('logged in successfully');
            return {...state, authError: null};
        case 'login_err':
            console.log('logged in error');
            return {...state, authError: action.err.message};
        case 'signup_success': 
            console.log('signUp successfully');
            return {...state,authError: null};
        case 'signout_success':
            console.log('signout successfully');
            return {...state, authError: null};
        case 'signout_err':
            console.log('signout error');
            return {...state, authError: action.err.message};
        case 'signup_err': 
            console.log('signUp error');
            return {...state,authError: action.err.message};
        default:
            return state;
    }
};

export default authReducer;