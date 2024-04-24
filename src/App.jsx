import { useState } from 'react'
import SearchBar from './componentes/SearchBar'
import SearchBar from './componentes/ImageList'
import searchImage from './api'
import './App.css'

function App() {
  const [images, setImagas] = useState([])

  const handleSubmit = async(term) => {
    console.log('ustate esta buscando con: ', term)
    const result = await searchImage(term)
    
    console.log('coco')
    console.log(result)

    setImages(result)
  }

  return (
    <div>
  <h1>App</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>

  )
}
export default App
