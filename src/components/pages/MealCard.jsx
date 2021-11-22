import React from 'react'

import { Link } from 'react-router-dom'

const MealCard = ({ meal }) => {
    const { strMeal, strMealThumb, idMeal,strYoutube } = meal



    return (
        <Link to='/ingredients' state={idMeal} >
            <div>
    
            <div className='mealcard'>
                <h3>{strMeal}</h3>
                <img src={strMealThumb} alt={strMeal} width="300px" />
                
            </div>
        </div>
        </Link>

    )
}

export default MealCard
