import React, { Component } from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Dashboard from "./components/dashboard/dashboard";
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Nav from './components/layout/nav';
import ProjectDetails from './components/project/projectDetails';
import CreateProject from './components/project/createProject';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/project/:id" component={ProjectDetails}/>
          <Route exact path="/login" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/create" component={CreateProject} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
