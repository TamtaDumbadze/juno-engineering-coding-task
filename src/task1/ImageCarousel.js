import React, { useState } from 'react'
import { Fab, CircularProgress } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import './styles.css'

const ImageCarousel = ({imageList, loading}) => {
    const [currentImg, setCurrentImg] = useState(0)

    const previousImg = () => {
        setCurrentImg(currentImg === 0 ? imageList.length - 1 : currentImg - 1)
    }

    const nextImg = () => {
        setCurrentImg(currentImg === imageList.length - 1 ? 0 : currentImg + 1)
    }

    return (
        <div className="carousel">
            {loading 
                ? <CircularProgress/>
                : <>
                    <Fab color="primary" onClick={() => previousImg()}>
                        <ArrowBackIosIcon/>
                    </Fab>
                    <div className="image" style={{ backgroundImage: `url(${imageList[currentImg]})` }}/>
                    <Fab color="primary" onClick={() => nextImg()}>
                        <ArrowForwardIosIcon/>
                    </Fab>
                </>
            }
      </div>
    )
}
export default ImageCarousel