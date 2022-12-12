import React from 'react'

import circle from '../Figures_SVG/Ellipse.svg'
import Figure from '../Figures_SVG/Figure'
import decaedro from '../Figures_SVG/decaedro.svg'
import rect from '../Figures_SVG/rect.svg'



import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Homepage from '../Homepage'
const Buttons404 = (props) => {
    // const context = useRef(null)

    // props.ctx = context
    // const clear = () => {
    //     context.current.clearRect(0, 0, context.current.canvas.width, context.current.canvas.height)
    // {props.context_current}.clearRect(0, 0, {props.context_current_canvas_width}, {props.context_current_canvas_height})

    // }
    // const saveImage = async () => {
    //     // context.current.fillStyle = "white";
    //     //  context.className("backgroundGoesWhite")

    //     // não está a guardar com fundo
    //     // context.current.globalCompositeOperation = "destination-over"
    //     // context.current.canvas.style.backgroundColor = "white"

    //     // refCanvas = props.refCv
    //     const image = refCanvas.current.toDataURL('My_GRA_Art/jpeg');
    //     const blob = await (await fetch(image)).blob();
    //     const blobURL = URL.createObjectURL(blob);
    //     const link = document.createElement('a');
    //     link.href = blobURL;
    //     link.download = "My_GRA_Art.jpeg";
    //     link.click();
    // }

    return (

        <div className='ErrorPage__buttons-area'>
            <div className='buttons-area__divFigure'>
                <Link to="/homepage">
                    <Figure path={circle} text='Click me!' />
                </Link>
            </div>
            <div className='buttons-area__divFigure1'>
                <Link to="/homepage">
                    <Figure path={decaedro} text='Me!' />
                </Link>
            </div>
            <div className='buttons-area__divFigure2'>
                <Link to="/homepage">
                    <Figure path={props.rect} text='Or me!' />
                </Link>
            </div>
            {/*             
             <div className="artRelatedActions">
                <button onClick={clear} className="canvasRelated text--bold"> Clean Art </button>
                <button onClick={saveImage} className="canvasRelated text--bold"> Download Art </button>
            </div>  */}
        </div>

    )
}

export default Buttons404
