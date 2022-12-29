import MealCard from './MealCard'

const MealsContainer = ({ meals }) => {
   return (
      <div
         id='recipes'
         className='homeBg flex flex-wrap justify-around w-full my-[60px]'
      >
         {!meals || meals === null || meals === undefined
            ? <p className='text-center text-red-400 font-semibold text-[1.15rem]'>Meal Not Found! <br /> Please Try Searching for Another Meal </p>
            : meals.map((meal) => (
                 <MealCard meal={meal} key={meal.idMeal} />
              ))}
      </div>
   )
}

export default MealsContainer
