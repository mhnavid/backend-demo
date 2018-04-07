import React, { Component } from 'react';
import './caseTable.css';
import UserPage from "../../user/userPage";

class CaseTable extends Component {
    render(){
        const caselist = [
            {id: 1, car: 'Dhaka Metro la 1270', owner: 'test', case:'test case 1' },
            {id: 2, car: 'Dhaka Metro la 1270', owner: 'test', case:'test case 2' }
        ];
        const caselst = caselist.map((cases) => {
            return (
                <tr>
                    <th scope="row">{cases.id}</th>
                    <td>{cases.car}</td>
                    <td>{cases.owner}</td>
                    <td>{cases.case}</td>
                </tr>
            )
        });
        return (
            <div>
                <UserPage/>
                <div className="container">
                    <table className="table text-center">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Car</th>
                            <th scope="col">Owner</th>
                            <th scope="col">Case</th>
                        </tr>
                        </thead>
                        <tbody>
                        {caselst}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CaseTable;