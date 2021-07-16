import React, { useEffect } from 'react'
import { useState} from 'react';
import EmployeeService from '../sevices/EmployeeService';
import History from './History';

export default function UpdateEmployee  ()  {

const [credentials, setCredentials] = useState({
   
    firstName: "",
    lastName: "",
    emailId: ""
});

// useEffect(()=> {

//     EmployeeService.getEmployeeById(id).then((res)=>{
//         let employee=res.data;
//         setCredentials({...employee});
//     });
//  }, []);

const onChangeHandler = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
}

const updateEmployee = (e) => {
    e.preventDefault();
    let employee = {...credentials};
    console.log('employee =>' + JSON.stringify(employee));

    alert("Employee updated");
    setCredentials({
       
        firstName: "",
        lastName: "",
        emailId: ""
    });
}
const Cancel = () => {
  
    setCredentials({
       
        firstName: "",
        lastName: "",
        emailId: ""
    });
}


return (
    <div>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 mt-lg-5 ">
                    <h3 className="text-center mt-3">Add Employee</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label className="form-label">First Name: </label>
                                <input placeholder="First Name" name="firstName" className="form-control" value={credentials.firstName} onChange={onChangeHandler} />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Last Name: </label>
                                <input placeholder="Last Name" name="lastName" className="form-control" value={credentials.lastName} onChange={onChangeHandler} />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email Id: </label>
                                <input placeholder="Email Address" type="email" name="emailId" className="form-control" value={credentials.emailId} onChange={onChangeHandler} />
                            </div>

                            <div className="mt-5 mb-3">
                                <center>
                              
                                    <button className="btn btn-success" onClick={updateEmployee}>Update</button>
                                    
                                    <button className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={Cancel}>Cancel</button>
                                   
                                </center>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
)
}