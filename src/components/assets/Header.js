import React from 'react'
import gra__logo__small from './img/gra__logo__small.svg'

const HeaderComponent = () => {
    return (
        <nav className="nav-bar">
            <img src={gra__logo__small} alt="" className="nav-bar__logo" />
            <a className="nav-bar__burger-menu"><h1>..</h1></a>
            <h1 className="nav-bar__title">Projeto</h1>
            <div className="nav-bar__dropdown-menus">
            <div className="dropdown-menus__menu">
                    <h3 className="dropdown-menus__title">Categories</h3>
                    <ul className="title__categories">
                        <li className="categories__category">+ All</li>
                        <li className="categories__category">+ Branding</li>
                        <li className="categories__category">+ Illustrations</li>
                        <li className="categories__category">+ Movies</li>
                    </ul>
                </div>
                <div className="dropdown-menus__menu">
                    <h3 className="dropdown-menus__title">Designer</h3>
                    <ul className="title__categories">
                        <li className="categories__category">+ All</li>
                        <li className="categories__category">+ Inês</li>
                        <li className="categories__category">+ João</li>
                        <li className="categories__category">+ José</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default HeaderComponent