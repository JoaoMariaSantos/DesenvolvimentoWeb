import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../api/api';
import Carousel from './Carousel';
import CarouselMobile from './CarouselMobile';

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
                console.log(result)
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

    const handleChange = () => {
        setTimeout(() => {
            document.location.reload();
          }, 1);
    }

    let videoLink = document.querySelector('.workpage__info .videoLink');
    
    if(videoLink == null) videoLink = document.querySelector('.workpage__info .videoLink');
    else if(!isALink(videoLink.href)) videoLink.style.display = 'none';
    else console.log(videoLink.href);

    let webLink = document.querySelector('.workpage__info .webLink');

    if(webLink == null) webLink = document.querySelector('.workpage__info .webLink');
    else if(!isALink(webLink.href)) webLink.style.display = 'none';
    else console.log(webLink.href);

    function isALink(url){
        if(url === 'https://www.youtube.com' || url === 'https://www.google.com/') return false;
        else if(url.includes('localhost')) return false;
        else if(!url) return false;
        else if(url.length < 7) return false;

        return true;
    }

    return (
        <div className='workpage'>
            {project &&
                <div>
                    <div className="workpage__content">
                        <div className="workpage__carousel">
                            <Carousel img1={project.acf.image_0.url} img2={project.acf.image_1.url} img3={project.acf.image_2.url} />
                            <CarouselMobile props={[project.acf.image_0.url,project.acf.image_1.url,project.acf.image_2.url]}/>
                        </div>
                        <div className="workpage__info">
                            <p className="workpage__info-title text--headings">{project.title.rendered}</p>
                            <p className="workpage__info-author">By: {project.acf.author[0]}</p>
                            {/* <p className="workpage__info-author">{project.acf.outside_url}</p>
                            <p className="workpage__info-author">{project.acf.video_url}</p> */}
                            <p className="workpage__info-description">{project.content.rendered.replaceAll('<p>', '').replaceAll('</p>', '')}</p>
                            <a href={project.acf.outside_url} className='webLink'><i className='fa fa-globe'></i></a>
                            <a href={project.acf.video_url} className='videoLink'><i className='fa fa-play'></i></a>
                        </div>
                    </div>
                    <div className="workpage__links">
                        <a href={`/DesenvolvimentoWeb/#/work/${previousProject}`} onClick={handleChange}><i className="fa fa-chevron-left"></i> Previous</a>
                        <a href={`/DesenvolvimentoWeb/#/work/${nextProject}`} onClick={handleChange}> <p>Next <i className="fa fa-chevron-right"></i></p></a>
                    </div>
                </div>
            }
        </div>
    )
}

export default WorkPage
