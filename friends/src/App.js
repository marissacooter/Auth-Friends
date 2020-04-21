import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <Router>
      <div className="App">
        <ProtectedRoute path="/friendslist" component={FriendsList} />
        Hi
      </div>
    </Router>
  );
}

export default App;
