
// MOBILE
// --> TODO: TO MOVE THE PROFILE FIGURES BEFORE THE 2ND PARAGRAPH OF TEXT
window.addEventListener("resize", () => {
    let motherContainer = document.querySelector('.about__all-text')
    let profileImgs = document.querySelector('.about__figures')
    let parentDiv = document.getElementsByClassName('about__maintext__container')
    let afterElement = parentDiv.lastChild()

    const mediaQuery = window.matchMedia('(max-width: 600px)')
    if (mediaQuery.matches) {
        //    console.log(afterElement)
        parentDiv.insertBefore(profileImgs, afterElement)
        afterElement.style.marginTop = '8vh'
    }
    else {
        motherContainer.insertBefore(profileImgs, parentDiv.nextSibling)
        afterElement.style.marginTop = 0
    }


    // motherContainer.style.height = profileImgs.getBoundingClientRect.bottom()
    // console.log(profileImgs.getBoundingClientRect.bottom())
})

const About = () => {
    return (
        <div id='aboutPage'>
            <div>
                <h2 className="about__title text--headings text--underline">Who are we?</h2>
                <div className="about__all-text">
                    <div className="about__maintext__container">
                        <p className="about__text text--paragraph">Grä was created in 2022 by <span className='ines text--green'>Inês</span>,
                            <span className="joao text--blue"> João </span> and <span className="jose text--red">José</span>.
                            <br></br>
                            <br></br>
                            <br></br>
                        </p>
                        {/* <br></br>
                    <br></br>
                    <br></br> */}
                        <p className="about__text text--paragraph">In this website you can find a collection of 83 projects.</p>
                    </div>
                    <div className="about__figures">
                        <div className='deca__ines'></div>
                        <div className="circle__joao"></div>
                        <div className="triangle__ze"></div>
                    </div>

                </div>
                <div className="about__giant-circle">
                    <div className="giant-circle ">
                        <p className="text--paragraph">
                            Sometimes things might get a little crazy, but we promise we can help you with great design.
                        </p>   </div>
                </div>

                {/* <img src={decaedro} className='figure__deca'></img> */}

            </div>
        </div>
    )
}


export default About