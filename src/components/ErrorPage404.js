//DRAW CODE ADAPTED FROM: https://github.com/recraftrelic/canvas-draw-app/blob/master/src/App.js
import React, { useCallback } from 'react'
import rect from '../assets/img/Figures_SVG/rect.svg'


import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


import Buttons404 from './Buttons404'

const ErrorPage404 = () => {
  const refCanvas = useRef(null)
  // const refContext = useRef(null)
  const context = useRef(null)

  const [isDrawing, setIsDrawing] = useState(false); // mouseDown
  const [previousPosition, setPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    if (refCanvas.current) {
      context.current = refCanvas.current.getContext('2d')
    }
  }, []);


  const draw = useCallback((x, y) => {
    if (!isDrawing) {
      return
    } else {

      // context.current.globalCompositeOperation = "destination-over"
      // context.fillStyle = 'blue' 
      context.current.beginPath();
      context.lineCap = "round"
      context.current.strokeStyle = "black"
      context.lineWidth = 5 + 'px'
      context.current.moveTo(previousPosition.x, previousPosition.y)
      context.current.lineTo(x, y); //draws line between previous and current pos
      context.current.closePath()
      context.current.stroke()

      setPosition({ //new pos, becomes previous
        x,
        y
      })
    }
  }, [previousPosition, isDrawing, setPosition]);


  const onMouseDown = (e) => {
    let y = e.pageY - 80
    setPosition({
      x: e.pageX,
      y: y
    })
    setIsDrawing(true)
  }

  const onMouseUp = (e) => {
    setIsDrawing(false)
  }
  const onMouseMove = (e) => {
    let y = e.pageY - 80
    draw(e.pageX, y)
  }


  const clear = () => {
    context.current.clearRect(0, 0, context.current.canvas.width, context.current.canvas.height)
  }
  const saveImage = async () => {
    const image = refCanvas.current.toDataURL('My_GRA_Art/jpeg');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = "My_GRA_Art.jpeg";
    link.click();
  }


  // console.log(isDrawing, previousPosition)
  return (


    <div className='ErrorPage'>
      <canvas
        width={window.innerWidth - 70 + 'px'}
        height={window.innerHeight - 70 + 'px'}

        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
        ref={refCanvas}
      />
      <div className='ErrorPage__mainText'>
        <h1 className='ErrorPage__title text--black--color text--regular'>404</h1>
        <h2 className='ErrorPage__subtitle text--regular'>
          What to grä? <br />
          <br />
          Go back to our
          <br />
          agräzing homePage
        </h2>
      </div>

      <Buttons404 rect={rect} />
      <div className="artRelatedActions">
        <button onClick={clear} className="canvasRelated text--bold"> Clean Art </button>
        <button onClick={saveImage} className="canvasRelated text--bold"> Download Art </button>
      </div>
    </div>
  )
}
export default ErrorPage404



// //DRAW CODE ADAPTED FROM: https://github.com/recraftrelic/canvas-draw-app/blob/master/src/App.js