import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/action/authaction';

const Signin = (props) => {
    return (
         <ul className = "right">
             <li><NavLink to='/create'>new project</NavLink></li>
             <li><a onClick = {props.signout}>logout</a></li>
    <li><NavLink to='/' className = 'btn btn-floating pink lighten-1'>{props.profile.initials}</NavLink></li>

         </ul> 
    )
}
const mapdispatchtoprops =(dispatch) => {
 return {
     signout : () => dispatch(signOut())
 }
}

export default connect(null, mapdispatchtoprops)(Signin);