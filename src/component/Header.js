import React from 'react'

const Header = ({setIsAdding}) => {
  return (
    <header>
        <h1 className='text-center mb-4'>Employee Management System</h1>
        <div>
            <button onClick={()=>setIsAdding(true)}className='round-button'>Add Employee</button>
        </div>
    </header>
  )
}

export default Header
