import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import EmployeeService from '../sevices/EmployeeService';
import History from './History';

export default function CreateEmployee(props) {
    const [credentials, setCredentials] = useState({
       
        firstName: "",
        lastName: "",
        emailId: ""
    });
    
const[title,setTitle]=useState("");

    let { id } = useParams();

    useEffect(() => {
        if (id === "_add"){
            setTitle("Add Employee");
            return;
        }
        else {
            setTitle("Update Employee");
            EmployeeService.getEmployeeById(id).then((res) => {
                let employee = res.data;
                setCredentials({ ...employee });
            });
        }
    }, [id]);

    const onChangeHandler = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = { ...credentials };
        console.log('employee =>' + JSON.stringify(employee));
        if (id === "_add") {
            EmployeeService.createEmployee(employee).then(res => {
                History.push('/employees');
            });
        }
        else {
            EmployeeService.updateEmployee(employee, id).then(res => {
                History.push('/employees');
            });
        }
        setCredentials({
            firstName: "",
            lastName: "",
            emailId: ""
        });
    }
    const Cancel = () => {
        History.push('/employees');
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
                    <h3 className="text-center mt-3">{title}</h3>
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

                                        <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Save</button>

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
