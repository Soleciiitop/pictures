import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImage from './api'

import './App.css'


function App() {
  const [images, setImages] = useState ([])

  const handleSubmit = async(term) =>{
    console.log('usted esta buscando con:', term)
    const result = await searchImage(term)
    
    setImages(result)

  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
  )
}

 
export default App
