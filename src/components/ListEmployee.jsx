import React from 'react'
import { useState } from 'react'

export default function ListEmployee() {
    const [employee, setEmployee] = useState([]);

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee.map(e => {
                                <tr key={e.id}>
                                    <td>{e.firstName}</td>
                                    <td>{e.lastName}</td>
                                    <td>{e.emailId}</td>
                                </tr>
                            })
                        }

                    </tbody>

                </table>

            </div>
        </div>
    )
}