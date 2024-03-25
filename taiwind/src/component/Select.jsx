import React from 'react'
import bab2 from '../assets/bab2.jpg'
import babora from '../assets/babora.jpg'
import getaway from '../assets/get-away.avif'
import maldives from '../assets/maldives.jpeg'
import overwater from  '../assets/overwater-beach.jpg'
import SelectCard from './SelectCard'

const Select = () => {
  return (
    <div className='max-w-[1240px]  mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectCard  className= 'h-[1500px]' bg={bab2} text='BoraBora'/>
        <SelectCard bg={getaway} text='getAway'/>
      <SelectCard bg={maldives} text='maldive'/>
      <SelectCard bg={overwater} text='overBora'/>
      <SelectCard bg={babora} text='Boralingo'/>
      <SelectCard   bg={maldives} text='jamaica'/>




        
    </div>
  )
}

export default Select