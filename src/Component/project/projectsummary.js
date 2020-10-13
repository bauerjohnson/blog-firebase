import React from 'react'
import moment from 'moment';

const Projectsummary = ({projectl}) => {
    return (
        <div className = "card z-depth-0 project-summary">
            <div className = "card-content grey-text text-darken-3">
    <span className = "card-title"> {projectl.title}</span>
    <p>posted by {projectl.authorfirstname} {projectl.authorlastname}</p>
    {/* <p className = 'grey-text'>{projectl.createdAt && moment(projectl.createdAt.toDate()).calendar()}</p> */}
    <p className = 'grey-text'>{projectl.createdAt && moment(projectl.createdAt.toDate()).calendar()}</p>
            </div>
            </div>
    )
}

export default Projectsummary;
