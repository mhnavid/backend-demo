import React, { Component } from 'react';
import './userTable.css';
import UserPage from "../../user/userPage";

class UserTable extends Component {
    render(){
        const userlist = [
            {id: 1, user: 'user1', pass: '1234'},
            {id: 2, user: 'user2', pass: '1234'},
            {id: 3, user: 'user3', pass: '1234'}
        ];

        const user = userlist.map((users) => {
            return (
                <tr>
                    <th scope="row">{users.id}</th>
                    <td>{users.user}</td>
                    <td>{users.pass}</td>
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
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                        </tr>
                        </thead>
                        <tbody>
                        {user}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default UserTable;