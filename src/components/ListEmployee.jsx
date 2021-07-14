import React from 'react'
import { useState,useEffect } from 'react'
import EmployeeService from '../sevices/EmployeeService';

export default function ListEmployee() {
    const [employee, setEmployee] = useState([]);
    
    useEffect(()=> {
       EmployeeService.getEmployees().then((res)=>{
           setEmployee(res.data);
       });
    }, []);

    return (
        <div>
            <h2 className="text-center px-lg-5 mt-lg-4">Employees List</h2>
            <div className="row">
                <table className="table  table-bordered px-lg-5 mt-lg-4">
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
                            employee.map((e) => (
                                <tr key={e.id}>
                                    <td>{e.firstName}</td>
                                    <td>{e.lastName}</td>
                                    <td>{e.emailId}</td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>
        </div>
    )
}