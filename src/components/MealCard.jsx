import React from 'react'

import {Link} from 'react-router-dom'

const MealCard = ({meal}) => {
    const {strMeal, strMealThumb, idMeal} = meal



    return (
        <Link to='/ingredients' state={idMeal}><div>
        <h3>{strMeal}</h3>
        <img src={strMealThumb} alt={strMeal} />
    </div></Link>
        
    )
}

export default MealCard
