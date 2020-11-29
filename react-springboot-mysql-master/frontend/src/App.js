import React from "react";
import AddFlight from "./Components/AddFlight";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Table from "./Components/Table";
import Analytic from "./Components/analytic";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Table} />
      <Route path="/addFlight" component={AddFlight} />
      <Route path="/analytic" component={Analytic} />
    </Router>
  );
}

export default App;
