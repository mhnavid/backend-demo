import React, { Component } from 'react';
import LoginFrom from "./loginForm";
import { ToastContainer } from 'react-toaster';
import { Router } from 'react-router';

class ManageLoginPage extends Component{

    setUserState(){
        let field = event.target.name;
        let value = event.target.value;
        this.state.user[field] = value;
        return this.setState({user: this.state.user});
    }

    authorFormIsValid(){
        let formIsValid = false;
        this.state.errors = {}; //clear any previous errors.

        if (this.state.user.username.length <= 0) {
            this.state.errors = 'Username can\'t be blank';
            formIsValid = false;
        }

        if (this.state.user.password.length <= 0) {
            this.state.errors = 'Username can\'t be blank';
            formIsValid = false;
        }

        if( this.state.user.username == "admin" && this.state.user.password == "1234"){
            formIsValid = true;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    }

    loginUser(){
        if(!this.authorFormIsValid()){
            return;
        }
        this.ToastContainer.success('Successfully logged in.');

    }
    changeRoute(){
        if (this.authorFormIsValid()){
            return true;
        }
        return false;
    }

    render(){
        return(
            <LoginFrom
                user={this.state.user}
                onChange={this.setUserState}
                onCheck={this.loginUser}
                errors={this.state.errors}
                to={this.changeRoute}
            />
        );
    }
}

export default ManageLoginPage;