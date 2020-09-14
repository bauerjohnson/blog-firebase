export const signIns = (credentials) => {
    return (dispatch, getstate, {getFirebase}) => {
      const firebase = getFirebase();

      firebase.auth().signInWithEmailAndPassword(
          credentials.email,
          credentials.password
      ).then(() => {
          dispatch({ type : 'LOGIN_SUCCESS'});
      }).catch((err) => {
          dispatch({type : 'LOGIN_ERROR', err});
      });
    }
}

export const signOut = () => {
    return (dispatch, getstate, {getFirebase}) => {
    const firebase = getFirebase();
    
    firebase.auth().signOut().then(() => {
        dispatch({type : 'SIGNOUT_SUCCESS'})
    })
    }
}


export const signup = (newUser) => {
    return (dispatch, getstate, {getFirebase, getFirestore}) => {

        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName : newUser.firstName,
                 lastName : newUser.lastName,
                initials : newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type : 'SIGNUP_SUCCESS'})
        }).catch((err) => {
            dispatch ({ type : 'SIGNUP_ERR', err})
        })
    }
}

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       var displayName = user.displayName;
//       var email = user.email;
//       var emailVerified = user.emailVerified;
//       var photoURL = user.photoURL;
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       var providerData = user.providerData;
//       // ...
//     } else {
//       // User is signed out.
//       // ...
//     }
//   });email-password.html
