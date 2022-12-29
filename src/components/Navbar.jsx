import React from 'react'

const Navbar = () => {
   return (
      <nav className='flex justify-between mx-8 my-5'>
         <a
            href='/'
            className='text-teal-900 flex-auto font-semibold'
         >
            RecipesDB
         </a>
      </nav>
   )
}

export default Navbar
