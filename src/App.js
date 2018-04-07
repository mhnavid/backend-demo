import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from "./components/login/loginForm";
import UserPage from "./components/user/userPage";
import RegisterForm from "./components/register/registerForm";
import CaseTable from "./components/user_tables/case/caseTable";

class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route path={"/user"} component={UserPage} />
            <Route path={"/register"} component={RegisterForm} />
            <Route path={"/caselist"} component={CaseTable}/>
        </Switch>
    );
  }
}

export default App;
