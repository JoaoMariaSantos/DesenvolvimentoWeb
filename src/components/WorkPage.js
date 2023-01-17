import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../api/api';

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
                } if(test < len && test > 0) {
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

    // console.log(projectIds)


    return (
        <div className='workpage'>
            {project &&
                <div>
                    <div className="workpage__info">
                        <p>{project.title.rendered}</p>
                        <p>{project.content.rendered.replaceAll('<p>', '').replaceAll('</p>', '')}</p>
                        <a href={`/DesenvolvimentoWeb/work/${previousProject}`}><i className="fa fa-chevron-left"></i> Previous project</a>
                        <a href={`/DesenvolvimentoWeb/work/${nextProject}`}>Next project <i className="fa fa-chevron-right"></i></a>
                    </div>
                    <div className="workpage__carousel">
                        <div className='workpage__carousel-item'>
                            <img src={project.acf.image_0.url} alt="image1" />
                        </div>
                        <div className='workpage__carousel-item'>
                            <img src={project.acf.image_1.url} alt="image2" />
                        </div>
                        <div className='workpage__carousel-item'>
                            <img src={project.acf.image_2.url} alt="image3" />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default WorkPage
