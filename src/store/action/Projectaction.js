export const createProject = (project) => {
    //previousely return {type: "ADD PROJECT", project : project}
    //returning a function cos now using thunks
    return (dispatch, getstate, {getFirebase, getFirestore}) =>{
        //making async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
           ...project,
           authorfirstname : 'emeka',
           authlastname : 'ohajionu',
           authorid : 12345,
           createdat : new Date()
        }).then(() => {
            dispatch({type : 'CREATE_PROJECT', project})
        }).catch ((err) => {
            dispatch({ type :'CREATE_PROJECT_ERROR', err  })
        })
       
    }
}