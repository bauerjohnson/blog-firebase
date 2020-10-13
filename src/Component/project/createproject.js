import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/action/Projectaction';
import { Redirect } from 'react-router-dom';

class Createproject extends Component {
    state = {
     title: "",
     content: ""
    }
    handlechange = (e) => {
      this.setState({[e.target.id] : e.target.value
    })
    }
    handlesubmit = (e) => {
       e.preventDefault();
       //console.log(this.state)
       this.props.createprojectm(this.state)
       this.props.history.push('/');
      }
    render() {

      const { auth } = this.props;
      if(!auth.uid) return <Redirect to = 'signin' />
        return (
            <div className = "container">

              <form onSubmit = {this.handlesubmit} className = "white">
               <h5 className = "grey-text text-darken-3"> create project</h5>   
               <div className = "input-field">
               <label htmlFor = "title">title</label>
               <input type= "text" id = "title" onChange = {this.handlechange}/>

               </div>

                
               <div className = "input-field">
               <label htmlFor = "content">content</label>
               <textarea id = "content" className = 'materialize-textarea'onChange = {this.handlechange}></textarea>
               </div>
               <div className = "input-field">
                   <button className = "btn pink lighten-1 z-depth-0">create project</button>
               </div>

               
                  </form>  
            </div>
        )
    }
}

const mapstatetoprops = (state) => {
  console.log(state)
return {
  
    auth : state.firebase.auth
}
}

const mapdispatchtoprops = (dispatch) => {
  return {
    createprojectm : (project) => dispatch(createProject(project))
  }
}


export default connect(mapstatetoprops, mapdispatchtoprops) (Createproject);
