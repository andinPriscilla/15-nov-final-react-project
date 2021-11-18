import {useContext} from 'react'
import MyContext from '../context/MyContext'

const Form = () => {
    const context = useContext(MyContext)
    const {input, setInput, handleSubmit} = context

    return (
        <form className="form">

            <button onClick={(e) => handleSubmit(e)}>Search</button>
            &nbsp;
            <input value={input} type="text"  onChange={(e) => setInput(e.target.value)} />
        
         </form>
    )
}

export default Form
