import React, { useEffect, useState } from 'react'

const Edit = (props) => {    
  const  {setIsEditing,employee, setEmployee, selectedEmployee} = props
    
    useEffect(()=>{
        console.log("editEmp", selectedEmployee)
    },[])

    const id = selectedEmployee.id;
    const [firstName, setFirstName] = useState(selectedEmployee.first_name)
    const [lastName, setLastName] = useState(selectedEmployee.last_name)
    const [email, setEmail] = useState(selectedEmployee.email)
    const [phone, setPhone] = useState(selectedEmployee.phone)
    const [gender, setGender] = useState(selectedEmployee.gender)
    const [age, setAge] = useState(selectedEmployee.age)
    const [jobTitle, setJobTitle] = useState(selectedEmployee.job_title)
    const [experience, setExperience] = useState(selectedEmployee.years_of_experience )
    const [salary, setSalary] = useState(selectedEmployee.salary)
    const [department, setDepartment] = useState(selectedEmployee.department)


   // console.log(setEmail)
    const handleSubmit=(e)=>{
        e.preventDefault();

        const existingEmployee = {
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
        for(let i=0; i<employee.length; i++){
            if(employee[i].id===id){
                employee.splice(i, 1, existingEmployee)
                break;
            }
        }
        setEmployee(employee)
        setIsEditing(false)
    }
  


  return (
    <div>
        <h2 className='text-center' style={{marginBottom:"40px"}}>Edit Employee</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' className='form-control' placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)} name="first_name" value={firstName}/>
            </div>
            <div>
                <input type='text' className='form-control' placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)} name="last_name" value={lastName}/>
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
            <button type='submit' className='round-button'>Update Employee</button>
        </form>
    </div>
  )
}

export default Edit
