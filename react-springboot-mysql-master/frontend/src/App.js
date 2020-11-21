import React from "react";
import AddFlight from "./Components/AddFlight";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Table from "./Components/Table";

function App() {
  
    return (
      <Router>
        <Route exact path="/" component={AddFlight} />
        <Route exact path="/view" component={Table} />
      </Router>
    );
  
}

export default App;
