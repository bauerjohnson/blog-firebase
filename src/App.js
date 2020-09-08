import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Component/layout/navbar';
import Dashboard from './Component/dashboard/dashboard';
import Projectdetails from './Component/project/projectdetails';
import signInauth from './Component/auth/signInauth';
import signupauth from './Component/auth/signUpauth';
import Createproject from './Component/project/createproject';




class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path= '/' component = {Dashboard} />
          <Route path= '/project/:id' component={Projectdetails}/>
         {/* <Route path= '/project/:id' component={Projectdetails}/> */}
          <Route path= '/signin' component = {signInauth}/>
          <Route path= '/signup' component = {signupauth}/>
          <Route path= '/create' component = {Createproject}/>


        </Switch>
      </div>

      </BrowserRouter>
    );
  }
}

export default App;
