import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../api/api';

const WorkPage = () => {
    const [project, setProject] = useState()
    const { id } = useParams();

	const fetchProject = async(category = '') => {
		await fetch(API_URL + 'projects/' + id)
				.then(response => response.json())
				.then(result => {
                    
                    setProject(result)
				});
	}

	useEffect(() => {
		fetchProject();
	}, [])

    return (
        <div className='workpage'>
            {project && 
            <div>
                <p>{project.slug}</p>
                <img src={project.acf.image_0.url} alt="sup" />
                <img src={project.acf.image_1.url} alt="sup" />
                <img src={project.acf.image_1.url} alt="sup" />
            </div>
            }
        </div>
    )
}

export default WorkPage
