import React from 'react'
import Projectsummary from './projectsummary';
import { Link } from 'react-router-dom';

const Projectlist = ({projecta}) => {
    return (
        <div className = 'project-list section'>

            {projecta && projecta.map(project => {
                return (
                    <Link to={'/project/' + project.id } key = {project.id}>
                    <Projectsummary projectl = {project} />
                    </Link>
                )
            }

            )}

            {/* <Projectsummary/>
            <Projectsummary/>
            <Projectsummary/>
            <Projectsummary/>
            <Projectsummary/> */}
            
        </div>

        
    )
}

export default Projectlist;
