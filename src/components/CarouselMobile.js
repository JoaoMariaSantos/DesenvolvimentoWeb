import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const CarouselMobile = (props) => {
    const images = props.props
    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
        // console.log(carousel.current.scrollWidth - carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])


    return (
        <div>
            <motion.div ref={carousel} className="carousel__mobile">
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
                    {images && images.map((image, index) => {
                        return (
                            <motion.div key={index} className="item">
                                <a href="https://www.youtube.com/"><img src={image} alt="img" /></a>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default CarouselMobile
