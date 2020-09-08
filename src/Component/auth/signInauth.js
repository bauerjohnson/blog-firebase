import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIns } from '../../store/action/authaction';
import { Redirect } from 'react-router-dom'

class signInauth extends Component {
    state = {
     email: "",
     password: ""
    }
    handlechange = (e) => {
      this.setState({[e.target.id] : e.target.value
    })
    }
    handlesubmit = (e) => {
       e.preventDefault();
       this.props.signin(this.state)
      }
    render() {
      const { authError, auth} = this.props;
      if(auth.uid) return <Redirect to = '/' />
        return (
            <div className = "container">

              <form onSubmit = {this.handlesubmit} className = "white">
               <h5 className = "grey-text text-darken-3"> sign In</h5>   
               <div className = "input-field">
               <label htmlFor = "email">email</label>
               <input type= "email" id = "email" onChange = {this.handlechange}/>

               </div>

                
               <div className = "input-field">
               <label htmlFor = "password">password</label>
               <input type= "password" id = "password" onChange = {this.handlechange}/>
               <div className = "input-field">
                   <button className = "btn pink lighten-1 z-depth-0">log in</button>
                   <div className = 'red-text center'>

                   </div>
               </div>
        {authError ? <p>{authError}</p> : null }
               </div>
                  </form>  
            </div>
        )
    }
}

const mapstatetoparops = (state) => {
  return{
   authError : state.auth.authError,
   auth : state.firebase.auth
  }
}

const mapdispatchtoprops = (dispatch) => {
  return {
   signin : (creds) => dispatch(signIns(creds))
  }
}

export default connect(mapstatetoparops, mapdispatchtoprops)(signInauth);
