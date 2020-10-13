export const createProject = (project) => {
    //previousely return {type: "ADD PROJECT", project : project}
    //returning a function cos now using thunks
    return (dispatch, getstate, {getFirebase, getFirestore}) =>{
        //making async call to database
        const firestore = getFirestore();
        const profile = getstate().firebase.profile;
        const authorid = getstate().firebase.auth.uid
       
        firestore.collection('projects').add({
           ...project,
           authorfirstname : profile.firstName,
           authorlastname : profile.lastName,
           authorid : authorid,
           createdAt : new Date()
        }).then(() => {
            dispatch({type : 'CREATE_PROJECT', project})
        }).catch ((err) => {
            dispatch({ type :'CREATE_PROJECT_ERROR', err  })
        })
       
    }
}