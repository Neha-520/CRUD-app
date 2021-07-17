import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import EmployeeService from '../sevices/EmployeeService';

export default function ViewEmployee() {

    let {id}=useParams();
    const [employee,setEmployee]=useState([]) 

useEffect(() => {
  EmployeeService.getEmployeeById(id).then(res=>{
      setEmployee(res.data);
  })
}, [id])

    return (
        <div>
        <br/><br/>
          <div className="card col-md-6 offset-md-3 ">
             <h2 className="text-center m-4">View Employee Details</h2>
             <div className="card-body px-4">
               <div className="row m-2" >
                   <h6 >Employee First Name : 
                  {employee.firstName}
                   </h6>
               </div>
               <div className="row m-2">
                   <h6 >Employee Last Name  : 
                  {employee.lastName}
                   </h6>
               </div>
               <div className="row m-2">
                   <h6 >Employee EmailId : 
                   {employee.emailId}
                   </h6>
               </div>

             </div>
          </div>
        </div>
    )
}
