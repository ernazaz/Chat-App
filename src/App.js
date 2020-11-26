import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/login" component={Login} />
        <Route path="/chat" component={Chat} />
        <Route path="/profile" component={Profile} />
      </Router>
    </div>
  );
};

export default App;
