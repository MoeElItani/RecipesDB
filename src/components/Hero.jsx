import axios from 'axios'
import { useState, useContext } from 'react'
import { myContext } from '../AppContext'
import HeroImg from '../assets/food1.jpg'
// styles
import './Styles.scss'

const Hero = () => {
   const [searchInput, setSearchInput] = useState('')
   const { setMeals } = useContext(myContext)

   const handleSearch = (e) => {
      axios
         .get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
         )
         .then(({ data }) => setMeals(data.meals))
      e.preventDefault()
      setSearchInput('')
   }
   return (
      <div
         className='heroStyles relative bg-fixed bg-gradient-to-b from-gray-800 to-transparent bg-center bg-no-repeat'
         style={{ backgroundImage: `url(${HeroImg})` }}
      >
         <div className='absolute inset-x-0 bottom-0'>
            <svg
               viewBox='0 0 224 12'
               fill='currentColor'
               className='w-full -mb-1 text-white'
               preserveAspectRatio='none'
            >
               <path d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z' />
            </svg>
         </div>
         <div className='text-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center'>
               <h2 className='mb-2 font-sans text-3xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-4xl sm:leading-none'>
                  Search For Your <br />
                  Favorite <br className='md:hidden' />
                  <span className='relative inline-block px-2'>
                     <div className='absolute inset-0 transform -skew-x-12 bg-teal-accent-400' />
                     <span className='relative text-teal-900'>
                        Recipes
                     </span>
                  </span>
               </h2>
               <p className='mb-4 text-base text-indigo-100 md:text-lg'>
                  Food Recipes All In One Place!
               </p>
               <form className='flex flex-col items-center w-full mb-4 md:flex-row md:px-16'>
                  <input
                     placeholder='Search'
                     required
                     type='text'
                     className='flex-grow w-full h-12 px-4 mb-3 text-gray-800 transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-white focus:border-teal-900 focus:outline-none focus:shadow-outline'
                     value={searchInput}
                     onChange={(e) =>
                        setSearchInput(e.target.value)
                     }
                  />
                  <button
                     id='meal-search-button'
                     className='inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide transition duration-200 rounded shadow-md md:w-auto bg-teal-accent-400 md:hover:bg-teal-accent-700 
                     active:bg-teal-700
                     focus:shadow-outline focus:outline-none'
                     onClick={handleSearch}
                  >
                     🔍
                  </button>
               </form>
               <a
                  href='#recipes'
                  aria-label='Scroll down'
                  className='flex items-center justify-center w-12 h-12 mx-auto text-white duration-300 transform border border-gray-400 rounded-full md:hover:text-teal-accent-400 md:hover:border-teal-accent-400 md:hover:shadow md:hover:scale-110
                  active:text-teal-accent-400 
                  active:border-teal-accent-400 
                  active:shadow active:scale-110
                  '
               >
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     width='18'
                     height='18'
                     viewBox='0 0 12 12'
                     fill='currentColor'
                  >
                     <path d='M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z' />
                  </svg>
               </a>
            </div>
         </div>
      </div>
   )
}

export default Hero
