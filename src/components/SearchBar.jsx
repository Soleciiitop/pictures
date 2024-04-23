import { useState } from "react"
import './SearchBar.css'

function SearchBar({ onSubmit}){
    const [term, setTerm] = useState('')
    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('necesito decirle al componente padre sobre los datos')
        onSubmit(term)
    }

    const handleChange = (event) =>{
        console.log(event.target.value)
        setTerm(event.target.value)
    }
    const handleClick =() => {
            onSubmit(term)
        }
    
    
    return(
    <div className="search-bar">

        <form onSubmit={handleFormSubmit}>

            <label htmlFor="">Pictures Search</label>
            
            <input onChange={handleChange} value={term}/>
        </form>
    </div>
    )
}

export default SearchBar