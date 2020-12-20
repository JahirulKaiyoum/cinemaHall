import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import { useState } from 'react';
import { createContext } from 'react';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
        <Home />
        </Route>
        <Route exact path="/">
        <Home></Home>
        </Route>
        
      </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
