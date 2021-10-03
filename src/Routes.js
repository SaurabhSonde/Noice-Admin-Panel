import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NoiceDashboard from "./Components/NoiceDashboard";
import ManageIcons from "./Components/ManageIcons";
import EditIcon from "./Components/EditIcon";
import App from "./App";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/noicedashboard" exact component={NoiceDashboard} />
        <Route path="/manage/icons" exact component={ManageIcons} />
        <Route path="/update/icon/:iconId" exact component={EditIcon} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
