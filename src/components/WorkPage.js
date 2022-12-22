import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../api/api';

const WorkPage = () => {
    const [projects, setProjects] = useState()

	const fetchProjects = async(category = '') => {
		await fetch(API_URL + 'projects')
				.then(response => response.json())
				.then(result => {
                    
                    setProjects(result)
				});
	}

	useEffect(() => {
		fetchProjects();
	}, [])

    const { id } = useParams();

    console.log(projects)

    return (
        <div>
            <p>Ola - {id}</p>
        </div>
    )
}

export default WorkPage
