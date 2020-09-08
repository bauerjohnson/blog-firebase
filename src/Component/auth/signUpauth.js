import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../store/action/authaction';

class signupauth extends Component {
    state = {
    email : '',
    password: "",
    firstname:"",
    lastname:'',
    }
    handlechange = (e) => {
      this.setState({[e.target.id] : e.target.value
    })
    }
    handlesubmit = (e) => {
       e.preventDefault();
       this.props.signup(this.state)
      }
    render() {
       const { auth } = this.props;
      if(auth.uid) return <Redirect to = '/' />
        return (
            <div className = "container">

              <form onSubmit = {this.handlesubmit} className = "white">
               <h5 className = "grey-text text-darken-3"> sign up</h5>   
               <div className = "input-field">
               <label htmlFor = "email">email</label>
               <input type= "email" id = "email" onChange = {this.handlechange}/>

               </div>

              <div className = "input-field">
               <label htmlFor = "password">password</label>
               <input type= "password" id = "password" onChange = {this.handlechange}/>

               <div className = "input-field">
               <label htmlFor = "firstname">firstname</label>
               <input type= "text" id = "firstname" onChange = {this.handlechange}/>

               </div>

               <div className = "input-field">
               <label htmlFor = "lastname">lastname</label>
               <input type= "text" id = "lastname" onChange = {this.handlechange}/>

               </div>
               <div className = "input-field">
                   <button className = "btn pink lighten-1 z-depth-0">sign up</button>
               </div>

               </div>
                  </form>  
            </div>
        )
    }
}

const mapstatetoprops = (state) => {
  return {
 auth : state.firebase.auth
  }
}

const mapdispatchtoprops = (dispatch) => {
  return {
    signup : (newUser) => dispatch(signup(newUser))
  }
}

export default connect(mapstatetoprops, mapdispatchtoprops)(signupauth);
