import React from 'react'
import{BsPerson}from 'react-icons/bs'
import{BiSearch}from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 px-4'>
        <div>
            <h1>Beaches</h1>
        </div>
         <ul className='hidden md:flex'> 
            <li>Home</li>
            <li>Destination</li>
            <li>View</li>
            <li>Bookings</li>
            <li>view </li>
         </ul>
         <div className='hidden md:flex'>
         <BsPerson/>
         <BiSearch/>
         </div>

    </div>
  )
}

export default Navbar