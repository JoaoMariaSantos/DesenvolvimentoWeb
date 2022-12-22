import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../api/api';

const WorksPage = () => {
    const [projects, setProjects] = useState();
    const [projectIds, setProjectIds] = useState([]);

    useEffect(() => {
        fetch(API_URL + 'projects')
            .then(res => {
                return res.json()
            })
            .then(data => {
                // console.log(data)
                setProjects(data)
                data.forEach(element => {
                    projectIds.push(element.id)
                });
                // setProjectIds(projectIds)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    console.log(projectIds)

    return (
        <div>
            <p>Estou na página dos trabalhos todos</p>
            {projects && projects.map(project => {
                return <Link key={project.id} to={`/work/${project.id}`}>{project.slug}</Link>
            })}
        </div>
    )
}

export default WorksPage
