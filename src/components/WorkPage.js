import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../api/api';
import Carousel from './Carousel';

const WorkPage = () => {
    const [project, setProject] = useState()
    const [projectIds, setProjectIds] = useState([]);
    const { id } = useParams();
    const [previousProject, setPreviousProject] = useState(id);
    const [nextProject, setNextProject] = useState();

    const fetchProject = async (category = '') => {
        await fetch(API_URL + 'projects/' + id)
            .then(response => response.json())
            .then(result => {
                // console.log(result)
                setProject(result)
            });
    }

    const fetchAllProjects = async () => {
        await fetch(API_URL + 'projects')
            .then(res => {
                return res.json()
            })
            .then(data => {

                for (let i = 0; i < data.length; i++) {
                    if (data[i].id === projectIds[i]) {
                    } else {
                        projectIds.push(data[i].id)
                    }
                }
                setProjectIds(projectIds)
                let test = projectIds.indexOf(parseInt(id))
                let len = projectIds.length - 1;
                if (test === 0) {
                    setPreviousProject(projectIds[len])
                    setNextProject(projectIds[test + 1])
                } if (test === len) {
                    setNextProject(projectIds[0])
                    setPreviousProject(projectIds[test - 1])
                } if (test < len && test > 0) {
                    setPreviousProject(projectIds[test - 1])
                    setNextProject(projectIds[test + 1])
                }
            })
            .catch(err => {
                console.log(err.message)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    useEffect(() => {
        fetchProject();
        fetchAllProjects();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // console.log(project.acf.author[0])

    return (
        <div className='workpage'>
            {project &&
                <div>
                    <div className="workpage__content">
                        <div className="workpage__carousel">
                            <Carousel img1={project.acf.image_0.url} img2={project.acf.image_1.url} img3={project.acf.image_2.url}/>
                        </div>
                        <div className="workpage__info">
                            <p className="workpage__info-title text--headings">{project.title.rendered}</p>
                            <p className="workpage__info-author">By: {project.acf.author[0]}</p>
                            <p className="workpage__info-description">{project.content.rendered.replaceAll('<p>', '').replaceAll('</p>', '')}</p>
                        </div>
                    </div>
                    <div className="workpage__links">
                        <a href={`/DesenvolvimentoWeb/work/${previousProject}`}><i className="fa fa-chevron-left"></i> Previous project</a>
                        <a href={`/DesenvolvimentoWeb/work/${nextProject}`}> <p>Next project <i className="fa fa-chevron-right"></i></p></a>
                    </div>
                </div>
            }
        </div>
    )
}

export default WorkPage
