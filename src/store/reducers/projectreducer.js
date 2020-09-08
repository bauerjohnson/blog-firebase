const initstate = {
    projectss : [
        {id : '1', title : 'help me find toab', content : 'blah blah come'},
        {id : '2', title : 'help me find john', content : 'blah blah you'},
        {id : '3', title : 'help me find emeka', content : 'blah blah balls'}
    ]
}

const projectreducer = (state = initstate, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('CREATED PROJECT', action.project);
            return state;
            case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
            default:
                return state;
    }
    
}

export default projectreducer;