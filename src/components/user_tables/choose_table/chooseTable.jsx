import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './chooseTable.css';

class ChooseTable extends Component {

    render(){
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="mx-auto table-choose">
                            <Link
                                to=""
                                className="btn btn-secondary"
                            >User List</Link>
                            <Link
                                to="caselist"
                                className="btn btn-secondary"
                            >Case List</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChooseTable;