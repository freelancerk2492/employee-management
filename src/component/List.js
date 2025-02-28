import React, { useEffect } from 'react'

const List = (props) => {
    const {employee, handleEdit, handleDelete} = props;
    useEffect(()=>{
        console.log("Employee", employee)
       
    },[])
    let count = 1

    const formatter= new Intl.NumberFormat('en-US',{
        style:"currency",
        currency:"INR",
        minimumFractionDigits:null

    })
 
  return (
    <div className='contain-table'>
      <table className='striped-table'>
        <thead>
            <tr>
            <th>S.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Job Title</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Department</th>
            <th colSpan={2} style={{textAlign:"center"}}>Action</th>
            </tr>
        </thead>
        <tbody>
            {employee.length > 0 ? (
                employee.map((empData)=>{
                    return <tr key={empData.id}>
                    <td>{count++}</td>
                    <td>{empData.first_name}</td>
                    <td>{empData.last_name}</td>
                    <td>{empData.email}</td>
                    <td>{empData.phone}</td>
                    <td>{empData.gender}</td>
                    <td>{empData.age}</td>
                    <td>{empData.job_title}</td>
                    <td>{empData.years_of_experience}</td>
                    <td>{formatter.format(empData.salary)}</td>
                    <td>{empData.department}</td>
                    <td>
                        <button onClick={()=>handleEdit(empData.id)}>Edit</button>                       
                    </td>
                    <td>
                        <button onClick={()=>handleDelete(empData.id)}>Delete</button>
                    </td>
                </tr>
                })
               
            ):(
                <tr>
                    <td colSpan={13}>No Data Found</td>
                </tr>
            ) }
        </tbody>
      </table>
    </div>
  )
}



export default List
