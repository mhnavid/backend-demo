import React, { Component } from 'react';
import './caseTable.css';
import UserPage from "../../user/userPage";

class CaseTable extends Component {

    render(){
        return (
            <div>
                <UserPage/>
                <div className="container">
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Car</th>
                            <th scope="col">Owner</th>
                            <th scope="col">Case</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CaseTable;