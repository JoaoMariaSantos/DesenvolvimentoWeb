import React from 'react'

const Figure = (props) => {
    console.log("Estou dentro da Homepage")

    return (
        <div className='figure text--white text--regular'>
            <img src={props.path}></img>
            <h3> {props.text} </h3>
        </div>
    )
}

export default Figure
