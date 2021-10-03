import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import page from "./pagenotfound.png";

function App() {
  return (
    <div className="App">
      <Link to="/noicedashboard">
        <Button style={{ backgroundColor: "white", borderColor: "white" }}>
          Go to dashboard
        </Button>
      </Link>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={page} alt="pagenotfound" />
      </div>
    </div>
  );
}

export default App;
