// imports
import { useContext, useEffect } from 'react'
import axios from 'axios'
// Styles
import './Home.scss'
// Components
import Hero from '../components/Hero'
import MealsContainer from '../components/MealsContainer'
import Footer from '../components/Footer'
import { myContext } from '../AppContext'

const Home = () => {

   const {meals, setMeals} = useContext(myContext);
   
   useEffect(() => {
      axios
         .get(
            'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
         )
         .then(({ data }) => setMeals(data.meals))
         .catch((err) => console.log(err))
   }, [])

   return (
      <div>
         <Hero />
         <MealsContainer meals={meals} />
         <Footer />
      </div>
   )
}

export default Home
