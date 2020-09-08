import React from 'react';
import { NavLink } from 'react-router-dom';

const Signout = () => {
    return (
         <ul className = "right">
             <li><NavLink to='/signup'>signup</NavLink></li>
             <li><NavLink to='/signin'>login</NavLink></li>
            

         </ul> 
    )
}

export default Signout;