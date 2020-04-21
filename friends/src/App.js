import React from "react";
import "./App.css";
import "./Login.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome!</h1>
        <ProtectedRoute path="/friendslist" component={FriendsList} />
        <Route path="/login" component={Login}/>
        <ProtectedRoute path="/addfriend" component={AddFriend}/>
      </div>
    </Router>
  );
}

export default App;
