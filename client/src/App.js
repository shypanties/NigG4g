import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { appModal, ModalsRegistry } from "./common/react/modals/modals";
import { loginModal } from "./common/react/modals/login/login";
import { userInfo } from "./common/states/user-info";
import MainPage from "./pages/MainPage/MainPage";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ConfirmResetPassword from "./pages/ConfirmResetPassword/ConfirmResetPassword";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import VerifyAccount from "./pages/VerifyAccount/VerifyAccount";

class App extends Component {
  render() {
    return (
      <div>
        <ModalsRegistry />
        <Switch>
          <Route path="/test-nav-bar" component={Toolbar} />
          <Route path="/verify-user" component={VerifyAccount} />
          <Route
            path="/confirm-reset-password"
            component={ConfirmResetPassword}
          />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/" exact component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
