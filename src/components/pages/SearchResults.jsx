import { useContext, useEffect, useState,navigate } from 'react'

import {Link} from 'react-router-dom'

import MyContext from '../../context/MyContext'

const SearchResults = () => {
    const context = useContext(MyContext)
    const { input,idMeal,strMeal,strMealThumb } = context


    const [mealItems, setMealItems] = useState([])


    useEffect(() => {
        console.log(input)
        try {
            const getByName = async () => {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
                const data = await response.json()
                /* setMeals(data.meals) */
                console.log(data);
                const listItems = data.meals.map(item =>
                    <li key={item.idMeal} className="list-item">
                        <h3>{item.strMeal}</h3>
                        <img src={item.strMealThumb} alt={item.strMeal} width="300px"/>

                    </li>

                )
                setMealItems(listItems)

            }
            getByName()
        } catch (error) {
            console.log(error)
        }


    }, [])

    return (

        <div>
            <Link to='/ingredients' state={idMeal} >
            <div>
            <div className='mealcard'>
                <h3>{strMeal}</h3>
                <img src={strMealThumb} alt={strMeal} width="200px" />
            </div>
                </div>
                </Link>
            <div className="searchResults">
                <h1>Search Results</h1>
                <ul className="search">
                    {mealItems}
                </ul>
            </div>

           
        </div>
    )
}

export default SearchResults
