import React, { useEffect } from 'react'

const Contacts = () => {

    return (
        <div id='contactsPage'>
            <div>
                <h2 className="contacts__title text--headings text--underline">Contacts</h2>
                <div className="contacts__mainContent">
                    {/* <div className="figureContainer mainContent__Ines"> */}
                        <div className='figure__inside deca__ines__container'>
                            <div className='deca__ines'></div>
                            <h4 className="figure__name">Inês Pereira</h4>
                            <p className="figure__email">ip@gmail.com</p>

                        {/* </div> */}


                    </div>
                    {/* <div className="figureContainer mainContent__joao"> */}
                        <div className="circle__joao__container ">
                            <div className="figure__inside circle__joao"></div>
                            <h4 className="figure__name">João Santos</h4>
                            <p className="figure__email">emaildojoao@gmail.com</p>
                        </div>
                    {/* </div> */}
                    {/* <div className="figureContainer mainContent__ze"> */}
                        <div className='figure__inside triangle__ze__container'>
                            <div className="figure__inside triangle__ze"></div>
                            <h4 className="figure__name">José Antunes</h4>
                            <p className="figure__email">zeFlex@gmail.com</p>
                        </div>
                    {/* </div> */}
                    <div className="contacts__text">
                    <h4 className="contacts__subtitle text--paragraph--small">Quer trabalhar connosco?</h4>
                    <h4 className="subtitle__paragraph text--paragraph--small">Contacte-nos!</h4>
                    </div>
                    


                </div>
            </div>

        </div>
    )
}


// let figures = document.querySelectorAll(".figure__inside")
// // figures.style.width= window.innerWidth

// console.log(figures)

export default Contacts