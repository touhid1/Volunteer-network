import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RegisterVolunteer from './components/RegisterVolunteer/RegisterVolunteer';
import AddEvent from './components/AddEvent/AddEvent';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/registration">
            <RegisterVolunteer/>
          </Route>
          <Route path="/addevent">
            <AddEvent></AddEvent>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;