// import React, {useRef, useEffect, useState} from 'react'

import circle from '../assets/img/Figures_SVG/Ellipse.svg'
import Figure from '../assets/img/Figures_SVG/Figure'
import decaedro from '../assets/img/Figures_SVG/decaedro.svg'

import { Link } from 'react-router-dom'
const Buttons404 = (props) => {
    return (

        <div className='ErrorPage__buttons-area'>
            <div className='buttons-area__divFigure'>
                <Link to="/DesenvolvimentoWeb/">
                    <Figure path={circle} text='Click me!' />
                </Link>
            </div>
            <div className='buttons-area__divFigure1'>
                <Link to="/DesenvolvimentoWeb/">
                    <Figure path={decaedro} text='Me!' />
                </Link>
            </div>
            <div className='buttons-area__divFigure2'>
                <Link to="/DesenvolvimentoWeb/">
                    <Figure path={props.rect} text='Or me!' />
                </Link>
            </div>
        </div>
    )
}

export default Buttons404
