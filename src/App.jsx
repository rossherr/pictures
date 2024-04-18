import { useState } from 'react'
import SearchBar from './componentes/SearchBar'
import './App.css'

function App() {
  const [images, setImagas] = useState([])

  const handleSubmit = async(term) => {
    console.log('ustate esta buscando con: ', term)
  }

  return (
    <div>
  <h1>App</h1>
       <SearchBar onSubmit={handleSubmit} />
    </div>

  )
}
export default App
