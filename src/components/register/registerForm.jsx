import React, { Component } from 'react';
import './registerForm.css';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {


    render(){
        return (
            <div className="register-body">
                <nav className="navbar avbar-expand-lg navbar-dark bg-dark">
                    <p className="navbar-brand">ADMIN</p>
                    <div className="user-page-button">
                        <Link
                            to="register"
                            className="btn btn-danger"
                        >LOGOUT</Link>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 mx-auto">
                            <div className="login-view-content">
                                {/*<img className="mx-auto d-block login-avatar" src={require('../img/user.png')} alt=""/>*/}
                                <div className="login-form-content form-control">
                                    <form action="" method="">
                                        <div className="form-group">
                                            <label htmlFor="registerUsername">Username</label>
                                            <input
                                                type="text"
                                                name="username"
                                                className="form-control"
                                                id="loginUsername"
                                                placeholder="Enter Username"
                                                autoFocus={true}
                                            />
                                        </div>
                                        <div className="form-group login-content-margin">
                                            <label htmlFor="registerPassword">Password</label>
                                            <input
                                                type="text"
                                                name="password"
                                                className="form-control"
                                                id="registerPassword"
                                                placeholder="Enter Password"
                                            />
                                        </div>
                                        <div className="form-group login-content-margin">
                                            <label htmlFor="registerRePassword">Password</label>
                                            <input
                                                type="text"
                                                name="password"
                                                className="form-control"
                                                id="registerRePassword"
                                                placeholder="Re-enter Password"
                                            />
                                        </div>
                                        <small
                                            className="form-text text-muted text-center text-danger">
                                            <span className="text-danger" id="registerErrorText">
                                            </span>
                                        </small>
                                        <div className="text-center">
                                            <div className="col-12">
                                                <span onMouseEnter={() => this.oncheck()}>
                                                    <Link
                                                        to="user"
                                                        className="btn btn-success login-content-margin"
                                                    >Register</Link>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterForm;