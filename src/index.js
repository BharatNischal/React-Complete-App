import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose } from 'redux';
import fbConfig from './config/firebase';
import App from './App';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer,
        compose(
            applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
            reactReduxFirebase(fbConfig,{attachAuthIsReady:true , useFirestoreForProfile: true, userProfile: 'users'}), // redux binding for firebase 2nd parameter is for loading DOM on auth promise return
            reduxFirestore(fbConfig,) // redux bindings for firestore 
          ));

store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));
    serviceWorker.unregister();
});


