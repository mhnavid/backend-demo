import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from "./components/login/loginForm";
import UserPage from "./components/user/userPage";

class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route path={"/user"} component={UserPage} />
        </Switch>
    );
  }
}

export default App;
