import { useContext, useEffect, useState } from 'react'

import {useNavigate} from 'react-router-dom'

import MealCard from './MealCard'


import MyContext from '../../context/MyContext'

const SearchResults = () => {
    const context = useContext(MyContext)
    const { search } = context


    const [mealItems, setMealItems] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
    
        try {
            const getByName = async () => {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                const data = await response.json()
                setMealItems(data.meals)




            }
            getByName()
        } catch (error) {
            console.log(error)
        }


    }, [search])

    const mealsList = mealItems.map(meal => <MealCard key={meal.idMeal} meal={meal} />)

    return (

        <div>

            <div className="searchResults">
                <h1>Search Results</h1>
                {mealsList}
                {/*  
                <ul className="search">
                    {mealItems}
                </ul> */}
                            <button onClick={() => navigate(-1)} className="returnbutton">Return to  Meals</button>

            </div>

        </div>
    )
}

export default SearchResults
