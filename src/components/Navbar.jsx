import React from 'react'

const Navbar = () => {
   return (
      <nav className='absolute p-2 md:mx-8 md:p-4 top-0 left-0 z-50 flex items-center justify-center md:justify-start w-full md:w-[97%] m-[auto]'>
         <h1 className='text-white font-semibold text-xl shadow-2xl shadow-[#1DE9B6]'>
            RecipesDB
         </h1>
      </nav>
   )
}

export default Navbar
