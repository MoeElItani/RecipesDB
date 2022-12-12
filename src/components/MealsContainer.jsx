import MealCard from './MealCard'

const MealsContainer = ({ meals }) => {
   return (
      <div
         id='recipes'
         className='homeBg flex flex-wrap justify-around w-full my-[60px]'
      >
         {meals.map((meal) => (
            <MealCard meal={meal} key={meal.idMeal} />
         ))}
      </div>
   )
}

export default MealsContainer
