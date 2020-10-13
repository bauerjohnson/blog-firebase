import React from 'react';
import { Link } from 'react-router-dom';
import Signin from './signIn';
import Signout from './signOut';
import { connect } from 'react-redux';
//import { isLoaded } from 'react-redux-firebase'

const Navbar = (props) => {
    const { auth, profile } = props;
    const link = auth.uid ?  <Signin profile = {profile}/> :  <Signout/>;
    return (
        <nav className = 'nav-wrapper grey darken-3'>
            <div className = 'container'>
      <Link to ='/' className = 'brand-logo'>bauers-plan</Link>
     
     {/* {isLoaded(auth) && link} */}
     {link}
            </div>
        </nav>


       
    )
}

const mapstatetoprops = (state) => {
    console.log(state)
    return {
    auth : state.firebase.auth,
    profile : state.firebase.profile
    }  
}
export default connect(mapstatetoprops)(Navbar);




