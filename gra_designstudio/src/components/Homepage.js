import React from 'react'

const Homepage = () => {
  console.log("Estou dentro da Homepage")

  return (
    <div className='homepage'>
      <h1 className='homepage__title' >Homepage</h1>
      <p className='homepage__description' >Ola estou na homepage!</p>

      <hr />

      <h3 className='homepage__subtitle' >Isto tem aqui alguma coisa</h3>
      <img className='homepage__img' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*" alt="bruh" />
      <div className='card'>
        <h3 className='card__title'>Card</h3>
      </div>
    </div>
  )
}

export default Homepage
