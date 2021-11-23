import { useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import MyContext from '../context/MyContext'



const Form = () => {
    const context = useContext(MyContext)
    const { input, setInput, setSearch } = context

    const navigate = useNavigate()
    





     const handleSubmit = (e) => {
         e.preventDefault();
           setSearch(input);
          navigate("/search-results");
     };
 
  

    return (

        <form className="form">
            <>

                <button onClick={(e) => handleSubmit(e)}>Search</button>
                &nbsp;
            </>
            <input value={input} type="text"  onChange={(e) => setInput(e.target.value)} />

        </form>
    )
}


export default Form