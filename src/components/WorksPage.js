import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const WorksPage = () => {
    const [projects, setProjects] = useState();

    useEffect(() => {
        fetch('http://localhost:8000/projects')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setProjects(data)
            })
            .catch(err => {
                console.log(err.message)
            })
    })

    return (
        <div>
            <p>Estou na página dos trabalhos todos</p>
            {projects && projects.map(project => {
                return <Link to={`/work/${project.id}`}>{project.title}</Link>
            })}
        </div>
    )
}

export default WorksPage
