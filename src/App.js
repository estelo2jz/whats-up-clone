import {useState} from 'react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { useStateValue } from "./StateProvider";

import './App.css';

function App() {
  
  // useState(null) will make you go to the LOGIN page
  const [{user}, dispatch] = useStateValue();
  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
