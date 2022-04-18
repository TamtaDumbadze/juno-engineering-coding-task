import { useState, useEffect } from 'react'
import { fetchImageUrls } from '../api/index'
import ImageCarousel from "./ImageCarousel"
import './App.css'

function App() {
  const [imageList, setImageList] = useState([])
  const [loading, setLoading] = useState(false)

  const getImageList = () => {
    fetchImageUrls()
      .then((list) => setImageList(list))
      .catch(console.log('Could not fetch data'))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    setLoading(true)
    getImageList()
  }, [])
  
  return (
      <div>
        <ImageCarousel imageList={imageList} loading={loading}/>
      </div>
  );
}

export default App;
