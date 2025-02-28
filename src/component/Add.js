import React, { useEffect, useRef, useState } from 'react'
import swal from 'sweetalert2'

const Add = (props) => {
const {employee,setEmployee, setIsAdding} = props;
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [gender, setGender] = useState("")
const [age, setAge] = useState("")
const [jobTitle, setJobTitle] = useState("")
const [experience, setExperience] = useState("")
const [salary, setSalary] = useState("")
const [department, setDepartment] = useState("")

   useEffect(()=>{
  //  console.log("emplen", employee.length)
   },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!firstName || !lastName || !email || !phone || !gender || !age || !jobTitle || !experience || !salary || !department){
            return   swal({
                //title: 'Are you sure?',
                text: 'All fields are requied',
                type: 'error',
                showCancelButton: true,
                showConfirmButton:true,
                confirmButtonText: "OK",
                cancelButtonText: 'Cancel'
              });
        }

        const id =  employee.length + 1;
        const newEmployee = {
            id,
            first_name:firstName,
            last_name:lastName, 
            email,
            phone,
            gender,
            age, 
            job_title:jobTitle,
            years_of_experience:experience,
            salary,
            department
        }
        employee.push(newEmployee)
        setEmployee(employee)
        setIsAdding(false)
        swal({
            title: 'Added',
            text: `${firstName} ${lastName} details are successfully added`,
            type: 'success',
            showCancelButton: true,
            confirmButtonText: "OK",
            cancelButtonText: 'Cancel'
          });
    }
       

      

       
   
    const textInput = useRef();
    useEffect(()=>{
        textInput.current.focus()
    },[])
  return (
    <div>
        <h2 className='text-center' style={{marginBottom:"40px"}}>Add New Employee</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' className='form-control' placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)} name="first_name" value={firstName}  ref={textInput}/>
            </div>
            <div>
                <input type='text' className='form-control' placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)} name="last_name" value={lastName} />
            </div>
            <div>
                <input type='text' className='form-control' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} name="email" value={email}/>
            </div>
            <div>
                <input type='text' className='form-control' placeholder='Phone' onChange={(e)=>setPhone(e.target.value)} name="phone" value={phone}/>
            </div>
            <div>
                <input type='text' className='form-control' placeholder='Gender' onChange={(e)=>setGender(e.target.value)} name="gender" value={gender}/>
            </div>
            <div>
                <input type='text' className='form-control' placeholder='Age' onChange={(e)=>setAge(e.target.value)} name="age" value={age}/>
            </div>
            <div>
                <input type='text' className='form-control' placeholder='Job Title' onChange={(e)=>setJobTitle(e.target.value)} name="job_title" value={jobTitle}/>
            </div>
            <div>
                <input type='text' className='form-control' placeholder='Experience' onChange={(e)=>setExperience(e.target.value)} name="experience" value={experience}/>
            </div>
            <div>
                <input type='text' className='form-control' placeholder='Salary' onChange={(e)=>setSalary(e.target.value)} name="salary" value={salary}/>
            </div>
            <div>
                <input type='text' className='form-control' placeholder='Department' onChange={(e)=>setDepartment(e.target.value)} name="department" value={department}/>
            </div>
            <button type='submit' className='round-button'>Add Employee</button>
        </form>
    </div>
  )
}

export default Add
