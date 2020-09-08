import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import * as serviceWorker from "./serviceWorker";
import * as serviceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootreducer";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore, createFirestoreInstance} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase} from "react-redux-firebase";
import fbConfig from './Component/config/fbconfig'
import firebase from "firebase/app";


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
   reduxFirestore(fbConfig),
  // reactReduxFirebase (fbConfig, {useFirestoreForProfile : true, useProfile : 'users'} )
   
  )
);

const config = {
  userProfile: 'users', // where profiles are stored in database,
  useFirestoreForProfile: true
};


const rrfProps = {
  firebase,
  config,
  dispatch: store.dispatch,
  createFirestoreInstance
};


//const rrfProps = { firebase, config: fbConfig, dispatch: store.dispatch, createFirestoreInstance};


ReactDOM.render(<Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><App /> </ReactReduxFirebaseProvider> </Provider>, document.getElementById("root"));


serviceWorker.unregister();