import React from 'react'

export default function login() {
  return (
    <div className='flex justify-end
    py-3
    bg-red-500 text-white'>
      <button className='transition-all p-1 hover:bg-white hover:text-red-500 rounded-md'>Sign-up</button>
      <button className='mx-6
      transition-all p-1 hover:bg-white hover:text-red-500 rounded-md'>Login</button>
    </div>
  )
}
