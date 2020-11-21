import React, { Component } from "react";
import AddFlight from "./Components/AddFlight";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Table from "./Components/Table";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={AddFlight} />
        <Route exact path="/view" component={Table} />
      </Router>
    );
  }
}

export default App;
