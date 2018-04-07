import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './userPage.css';
import ChooseTable from "../user_tables/choose_table/chooseTable";

class UserPage extends Component {

    render(){
        return (
            <div>
                <nav className="navbar avbar-expand-lg navbar-dark bg-dark">
                    <p className="navbar-brand">ADMIN</p>
                    <div className="user-page-button">
                        <span className="register-button">
                            <Link
                                to="register"
                                className="btn btn-outline-info"
                            >Register User</Link>
                        </span>

                        <Link
                            to="register"
                            className="btn btn-danger"
                        >LOGOUT</Link>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 choose-table">
                            <ChooseTable/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserPage;