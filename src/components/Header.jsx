import React from 'react'
import { Link} from 'react-router-dom'
import Form from './Form'

const Header = () => {
    return (
        <header>
            <Link to='/'><img src="images/food.png" alt=""/></Link>
            <Form />
        </header>
    )
}

export default Header
