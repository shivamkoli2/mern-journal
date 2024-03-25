import React from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import Login from "./components/login.component";
import Register from "./components/register.component";
import Submit from "./components/submit.component";
import Review from "./components/review.component";
import Journal from "./components/journal.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Routes>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={<Register/>} />
      <Route path="/submit" component={Submit} />
      <Route path="/review" component={Review} />
      <Route path="/journal" component={Journal} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
