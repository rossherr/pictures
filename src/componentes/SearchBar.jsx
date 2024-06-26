import { useState } from "react"

function SearchBar({ onSubmit }){
        const [term, setTerm] = useState('')

        const handleFromSubmit = (event) => {
            event.preventDefault()
            console.log('Necesito decirle al componente padre sobre los datos')
            onSubmit(term)
        }

        const handleChange = (event) => {
            console.log(event.target.value)
            setTerm(event.target.value)
        }
        
        const handleClick = () => {
            onSubmit(term)
        }

        return(
            <div>
                <h1>Search Bar </h1>
                <form onSubmit={handleFromSubmit}>
                 Confirma tu busqueda: {term}
                 <input onChange={handleChange} value={term}/>
                 </form>
                 <button onClick={handleClick}>Click Me!</button>
            </div>
        )
}

export default SearchBar