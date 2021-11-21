import { useEffect, useContext } from 'react'

import { useLocation, useNavigate} from 'react-router-dom'
import MyContext from '../../context/MyContext'

const Ingredients = () => {


    const location = useLocation()
    const mealId = location.state
    const context = useContext(MyContext)

    const navigate = useNavigate()


    const { ingredients, setIngredients } = context
    const {strMeal, strMealThumb, strInstructions} = ingredients


    useEffect(() => {
        try {
            const getIngredients = async () => {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)

                const data = await response.json()
                setIngredients(data.meals[0])

            }
            getIngredients()
        } catch (error) {
            console.log(error)
        }


    }, [])

    const ingredientsArray = []
    let ingredientObj = {ingredient: "", measurement: ""}

    for (let i = 1; i <= 20; i++) {
        let strIngredient = "strIngredient" + i
        let strMeasure = "strMeasure" + i
        if (ingredients[strIngredient] !== "" && ingredients[strIngredient] !== null) {
            ingredientObj = {ingredient: ingredients[strIngredient], measurement: ingredients[strMeasure]}
            ingredientsArray.push(ingredientObj)
        }

       
    }

    const ingredientsList = ingredientsArray.map(object => <li>{object.ingredient}---{object.measurement}</li>)
 
    return (
        <div className="recipes">
            <h1>Recipe and Measurement Of Food</h1>
        <h2>{strMeal}</h2>
            <div className="recipe">
                        
                        <img src={strMealThumb} alt={strMeal} />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="instruction">
                            <h3>Method of Preparation</h3>
                            <p>{strInstructions}</p>
                            &nbsp;
                            <ul>
                                <h3>Ingredients and Measurements</h3>
                                {ingredientsList}
                            </ul>
                            
                         
                        </div>
    
        </div>
       
            <button onClick={() => navigate(-1)} className="returnbutton">Return to  Meals</button>
         
        </div>
    )
}

export default Ingredients
