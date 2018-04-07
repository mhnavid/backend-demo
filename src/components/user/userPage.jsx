import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './userPage.css';

class UserPage extends Component {

    render(){
        return (
            <div>
                <nav className="navbar avbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">ADMIN</a>
                    <Link
                        to="register"
                        className="btn btn-outline-info"
                    >Register User</Link>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserPage;