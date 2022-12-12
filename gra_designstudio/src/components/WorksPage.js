import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const WorksPage = () => {
    useEffect(() => {
        fetch('http://localhost:8000/projects')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err.message)
            })
    })

    return (
        <div>
            <p>Estou na página dos trabalhos todos</p>
            <Link to="/works/fafafafa">Homepage</Link>
        </div>
    )
}

export default WorksPage
