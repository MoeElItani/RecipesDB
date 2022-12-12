import React from 'react'

const Navbar = () => {
   return (
      <nav className='flex justify-between mx-8 my-5'>
         <a href='/' className='text-teal-900 flex-auto font-semibold'>
            Recipes Diary
         </a>
         <div className='flex-2 space-x-5'>
            {[
               ['Home', '/'],
               ['Login', '/auth'],
            ].map(([title, url]) => (
               <a
                  href={url}
                  className='rounded-lg px-3 py-2 text-gray-800 font-medium hover:bg-slate-100 hover:text-slate-900'
               >
                  {title}
               </a>
            ))}
         </div>
      </nav>
   )
}

export default Navbar
