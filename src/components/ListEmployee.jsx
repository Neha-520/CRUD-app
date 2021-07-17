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

  const deleteEmployee=(id)=>{
      EmployeeService.deleteEmployee(id).then(res=>{
        setEmployee(employee.filter(elem => 
             elem.id !== id )); 
    });
  }

    return (
        <div>
            <h1 className="text-center px-lg-5 mt-lg-4">Employees List</h1>
            
            <div className="row">
            <a href="/add-employee/_add">
              <button className="btn btn-primary">Add Employee</button>
              </a>
            </div>
            
            <div className="row">
                <table className="table table-striped table-bordered m-4 p-3 ">
                
                    <thead className="p-5 m-lg-5">
                        <tr>
                            <th scope="col">Employee First Name</th>
                            <th scope="col">Employee Last Name</th>
                            <th scope="col">Employee Email Id</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee.map((e) => (
                                <tr key={e.id}>
                                    <td>{e.firstName}</td>
                                    <td>{e.lastName}</td>
                                    <td>{e.emailId}</td>
                                    <td>
                                    <a href={`/add-employee/${e.id}`}>
                                        <button className="btn btn-info ml-2">Update</button>
                                        </a>
                   
                                        <button style={{marginLeft:'10px'}} className="btn btn-danger" onClick={()=>deleteEmployee(e.id)}>Delete</button>
                                        <a href={`/view-employee/${e.id}`}>
                                        <button style={{marginLeft:'10px'}}className="btn btn-info" >View</button>
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>
        </div>
    )
}