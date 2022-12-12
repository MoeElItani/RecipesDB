const 
MealCard = ({ meal }) => {
   return (
      <div className='max-w-[320px] text-center bg-white rounded-lg shadow-lg md:hover:scale-105 duration-300 my-[20px] '>
         <img
            className='rounded-t-lg'
            src={meal.strMealThumb}
            alt={`img: ${meal.strMeal}`}
         />
         <h3 className='text-[1.25rem] p-5'>
            {meal.strMeal}
         </h3>
         <button className='inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md w-auto hover:text-zinc-700 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-blue-gray-300 focus:outline-none mb-6'>
            More Info
         </button>
      </div>
   )
}

export default MealCard
