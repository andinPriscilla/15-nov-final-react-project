import {useContext, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom' //uselocation will be use to pick up the state which is in the categorycard
import MealCard from './MealCard'

import MyContext from '../../context/MyContext'

const Meals = () => {
    const location = useLocation()
    const category = location.state
    const context = useContext(MyContext)

    const navigate = useNavigate()
    
    

    const {meals, setMeals} = context

useEffect(() =>{
    try {
        const getMeals = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}` )
            const data = await response.json()
            setMeals(data.meals)
            console.log(data)
        
        }
       getMeals()
    } catch (error) {
        console.log(error)
    }

     
},[])


    const mealsList = meals.map(meal => <MealCard key={meal.idMeal} meal={meal}/>)



    return (
        <div className="meal">
            <h1>Food Category</h1>
             <div className='meals'>
            {mealsList}
        </div>
        <button onClick={() => navigate(-1)}  className="returnbutton">Return to Categories</button>
        </div>
       
    )
}

export default Meals
