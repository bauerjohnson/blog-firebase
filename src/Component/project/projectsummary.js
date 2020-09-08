import React from 'react'

const Projectsummary = ({projectl}) => {
    return (
        <div className = "card z-depth-0 project-summary">
            <div className = "card-content grey-text text-darken-3">
    <span className = "card-title"> {projectl.title}</span>
            <p>posted by bauerjohnson</p>
            <p className = 'grey-text'>3rd september, 2am</p>
            </div>
            </div>
    )
}

export default Projectsummary;
