import { useContext} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import MyContext from '../context/MyContext'

import { v4 as uuid } from 'uuid'

const Form = () => {
    const context = useContext(MyContext)
    const { input, setInput, setSearch } = context

    const navigate = useNavigate()



    const linkTarget = {
        pathName: '/search-results',
        key: uuid(),
        state: {
            applied: true
        }
    }


    /*  const handleSubmit = (e) => {
         e.preventDefault();
           setSearch(input);
          console.log(input) 
     };
  */
    const checkForEnter = event => {
        const code = event.code
        if (code === "Enter") {
            // Act as if the submit search button had been pressed
            event.preventDefault()
            navigate("/search-results")

        }
    }

    return (

        <form className="form">
            <Link to={linkTarget}>

                <button >Search</button>
                &nbsp;
            </Link>
            <input value={input} type="text" onKeyPress={checkForEnter} onChange={(e) => setInput(e.target.value)} />

        </form>
    )
}

export default Form