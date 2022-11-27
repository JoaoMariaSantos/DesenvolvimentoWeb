//DRAW CODE ADAPTED FROM: https://github.com/recraftrelic/canvas-draw-app/blob/master/src/App.js
import React, { useCallback } from 'react'
import '../css/main.css'

import circle from './Figures_SVG/Ellipse.svg'
import Figure from './Figures_SVG/Figure'
import decaedro from './Figures_SVG/decaedro.svg'
import rect from './Figures_SVG/rect.svg'


import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ErrorPage404 = () => {

  const refCanvas = useRef(null)
  const refContext = useRef(null)
  const context = useRef(null)

  const [isDrawing, setIsDrawing] = useState(false); {/* mouseDown*/ }
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
  
     {/*} context.current.globalCompositeOperation = "destination-over"
    context.fillStyle = 'blue' */}
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
    setPosition({
      x: e.pageX,
      y: e.pageY
    })
    setIsDrawing(true)
  }

  const onMouseUp = (e) => {
    setIsDrawing(false)
  }
  const onMouseMove = (e) => {
    draw(e.pageX, e.pageY)
  }

  const clear = () => {
    context.current.clearRect(0, 0, context.current.canvas.width, context.current.canvas.height)
  }
  const saveImage = async () => {
   {/* context.current.fillStyle = "white";
     context.className("backgroundGoesWhite")
 */}
 {/* não está a guardar com fundo
 context.current.globalCompositeOperation = "destination-over"
 context.current.canvas.style.backgroundColor = "white"
*/}
    const image = refCanvas.current.toDataURL('My_GRA_Art/jpeg');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = "My_GRA_Art.jpeg";
    link.click();
  }

  console.log(isDrawing, previousPosition)
  return (

    <div>
      <canvas
        width={window.innerWidth * 2 + 'px'}
        height={window.innerHeight * 2 + 'px'}

        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
        ref={refCanvas}
      />
      <h3 className='text--regular'>HEADER</h3>
      <div className='mainText'>
        <h1 className='text--black--color text--regular'>404</h1>
        <h2 className='text--regular'>
          What to grä? <br />
          <br />
          Go back to our
          <br />
          agräzing homePage
        </h2>
      </div>

      <div className='buttonsArea'>
        <div className='divFigure'>
          <Link to="/loading"> {/* Homepage*/}
            <Figure path={circle} text='Click me!' />
          </Link>
        </div>
        <div className='divFigure1'>
          <Link to="/loading"> {/* Homepage*/}
            <Figure path={decaedro} text='Me!' />
          </Link>
        </div>
        <div className='divFigure2'>
          <Link to="/loading"> {/* Homepage*/}
            <Figure path={rect} text='Or me!' />
          </Link>
        </div>
      </div>
      <div className="artRelatedActions">
        <button onClick={clear} className="canvasRelated text--bold"> Clean Art </button>
        <button onClick={saveImage} className="canvasRelated text--bold"> Download Art </button>

      </div>


    </div>
  )
}
export default ErrorPage404

