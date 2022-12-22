import React from 'react'

const Figure = (props) => {
    return (
        <div className='figure text--white text--regular'>
            <img src={props.path} alt=""/>
            <h3> {props.text} </h3>
        </div>
    )
}

export default Figure
