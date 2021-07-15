import React from 'react'
import { useState,useEffect } from 'react'

export default function CreateEmployee (){
const [firstName,setfirstName]=useState(" ");
const [lastName,setlastName]=useState(" ");
const [emailId,setemailId]=useState(" ");

const FirstNameHandler=(event)=>{
    setfirstName(event.target.value);
}
const LastNameHandler=(event)=>{
    setlastName(event.target.value);
}
const EmailIdHandler=(event)=>{
    setemailId(event.target.value);
}
const saveEmployee=(e)=>{
e.preventDefault();
}
const Cancel=()=>{

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
                            <label>First Name: </label>
                             <input placeholder="First Name" name="firstName" className="form-control" value={firstName} onChange={FirstNameHandler}/>
                            </div>

                            <div className="form-group">
                            <label>Last Name: </label>
                             <input placeholder="Last Name" name="lastName" className="form-control" value={lastName} onChange={LastNameHandler}/>
                            </div>

                            <div className="form-group">
                            <label>Email Id: </label>
                             <input placeholder="Email Address" type="email" name="emailId" className="form-control" value={emailId} onChange={EmailIdHandler}/>
                            </div>

                            <div className="mt-5 mb-3">
                            <center>
                            <button className="btn btn-success" onClick={saveEmployee}>Save</button>
                            <button className="btn btn-danger" style={{marginLeft:"10px"}}onClick={Cancel}>Cancel</button>
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
