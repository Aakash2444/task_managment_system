import React from 'react'

const Header = () => {
  return (
    <>
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-semibold'>Hello, <br /> Aakash 👋</h1>
        <button className='text-lg bg-red-500 font-medium text-white px-4 py-2 rounded-lg'>Log Out</button>
    </div>
    </>
  )
}

export default Header