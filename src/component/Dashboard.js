import React, { useState } from 'react'
import swal from 'sweetalert2'
import Header from './Header'
import Add from './Add'
import Edit from './Edit'
import List from './List'
import { employeeData } from  '../data/db';


const Dashboard = () => {

    const [employee, setEmployee] = useState(employeeData)
    const [isEditing, setIsEditing] = useState(false)
    const [isAdding, setIsAdding] = useState(false)
    const[selectedEmployee, setSelectedEmployee] = useState(null)

    const handleEdit = (id)=>{
        const [emp ] = employee.filter((emp)=> emp.id === id)  
        console.log("setNew",setSelectedEmployee(emp))
        setIsEditing(true)
    }
    const handleDelete = (id)=>{
        console.log("emplid", id)
       
        // swal({
        //     title: 'Are you sure?',
        //     text: 'You will not be able to delete this data',
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonText: 'Yes, delete it!',
        //     cancelButtonText: 'No, keep it'
        //   }).then((result)=> {

            //if(result.value){
              
           employee.filter((employee)=>employee.id === id);
    
                swal(
                'Deleted!',
                'Your Data successfully deleted.',
                'success'
                )

            setEmployee(employee.filter((employee)=> {return employee.id!==id}))
            //}
         // }
        //)
    }

  return (
    <>
        <div className='container'>
            {!isAdding && !isEditing && 
                (
                   <>
                        <Header setIsAdding={setIsAdding}/>                        
                        <List employee = {employee} handleEdit={handleEdit} handleDelete={handleDelete}/>
                   </>
                )
            
            }
            {isAdding && (
                <Add employee = {employee} setEmployee={setEmployee} setIsAdding={setIsAdding}  />
            )}
             {isEditing && (
                <Edit setIsEditing ={setIsEditing} employee={employee} setEmployee={setEmployee} selectedEmployee={selectedEmployee}/>
            )}
        </div>

    </>
  )
}

export default Dashboard
