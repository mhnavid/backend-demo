import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './loginForm.css';
import { Link, Redirect, Router  } from 'react-router-dom';

class LoginForm extends Component {
    propTypes: {
        user: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onCheck: PropTypes.func.isRequired,
        errors: PropTypes.object,
        to: PropTypes.bool.isRequired
    };

    // changeRoute(){
    //     return this.router.confirmTransitionTo("/user");
    // }

    render(){
        return (
            <div className="login-body">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 mx-auto">
                            <div className="login-view-content">
                                <img className="mx-auto d-block login-avatar" src={require('../img/user.png')} alt=""/>
                                <div className="login-form-content form-control">
                                    <form action="" method="">
                                        <div className="form-group">
                                            <label htmlFor="loginUsername">Username</label>
                                            <input
                                                type="text"
                                                name="username"
                                                className="form-control"
                                                id="loginUsername"
                                                placeholder="Enter Username"
                                                autoFocus={true}
                                                onChange={this.props.onChange}
                                            />
                                        </div>
                                        <div className="form-group login-content-margin">
                                            <label htmlFor="loginPassword">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                id="loginPassword"
                                                placeholder="Enter Password"
                                                onChange={this.props.onChange}
                                            />
                                        </div>
                                        <small
                                            className="form-text text-muted text-center text-danger">
                                            <span className="text-danger" id="loginErrorText">
                                                {this.props.errors}
                                            </span>
                                        </small>
                                        <div className="text-center">
                                            <div className="col-12">
                                                {/*<input*/}
                                                    {/*type="submit"*/}
                                                    {/*value="Login"*/}
                                                    {/*className="btn btn-primary login-content-margin"*/}
                                                    {/*onClick={this.changeRoute}*/}
                                                {/*/>*/}
                                                {/*{this.props.children}*/}
                                                <Link
                                                    to="user"
                                                    className="btn btn-primary login-content-margin"
                                                >LOGIN</Link>
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

export default LoginForm;