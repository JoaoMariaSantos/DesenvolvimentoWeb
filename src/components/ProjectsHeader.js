import React from 'react'

export const ProjectsHeader = () => {
    return (
        <div className='projectfilter'>
            <h2 className='projectfilter__title'>Projects</h2>
            <div className='projectfilter__header'>
                <ul className='projectfilter__unordered-list'>
                    <li className='projectfilter__list-item'>
                        <p className='projectfilter__lable'>Categories</p>
                        <ul className='projectfilter__list-options'>
                            <li>+ All</li>
                            <li>+ Branding</li>
                            <li>+ Illustrations</li>
                            <li>+ Movies</li>
                        </ul>
                    </li>
                    <li className='projectfilter__list-item'>
                        <p className='projectfilter__lable'>Designer</p>
                        <ul className='projectfilter__list-options'>
                            <li>+ All</li>
                            <li>+ Inês</li>
                            <li>+ João</li>
                            <li>+ José</li>
                        </ul>
                    </li>
                    <li>Pesquisa</li>
                </ul>
            </div>
        </div>
    )
}
