import {useContext} from 'react'
import CategoryCard from '../CategoryCard'

import MyContext from '../../context/MyContext'

const Home = () => {
    const context = useContext(MyContext)
    const  {categories} = context

    const categoriesList = categories.map(category =>  <CategoryCard key={category.idCategory} category={category}/>)

    return (
        <div className="categorielist">
        <h1> Categories Of Food</h1>
        <div className="categories">
            {categoriesList}
        </div>
        </div>
    )
}

export default Home
