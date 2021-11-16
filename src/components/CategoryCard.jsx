import { Link } from 'react-router-dom'



const CategoryCard = ({ category }) => {
    const { strCategory, strCategoryThumb } = category


    return (
        <Link to='/meals' state={strCategory}><div>
            <h3>{strCategory}</h3>
            <img src={strCategoryThumb} alt={strCategory} />


        </div>
        </Link>

    )
}

export default CategoryCard
