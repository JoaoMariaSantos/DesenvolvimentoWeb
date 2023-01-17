import React, { useEffect, useState } from 'react'
import { API_URL } from '../api/api';

const WorksPage = () => {
    const [projects, setProjects] = useState();
    const [projectIds, setProjectIds] = useState([]);
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        fetch(API_URL + 'projects')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setProjects(data)

                for (let i = 0; i < data.length; i++) {
                    if (data[i].id === projectIds[i] || data[i].slug === itemList[i]) {
                    } else {
                        projectIds.push(data[i].id)
                        let str = data[i].slug.split('-').join(' ');
                        itemList.push([str, data[i]])
                    }
                }
                setItemList(itemList)
                setProjectIds(projectIds)
            })
            .catch(err => {
                console.log(err.message)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [filteredList, setFilteredList] = new useState(itemList);

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...itemList];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            return item[0].toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
        // console.log(filteredList)
    };


    return (
        <div className='workspage'>
            <div className='projectfilter'>
                <h2 className='projectfilter__title text--headings text--underline'>Projects</h2>
                <div className='projectfilter__header'>
                    <ul className='projectfilter__unordered-list'>
                        <li className='projectfilter__list-item'>
                            <p className='projectfilter__lable'>Categories</p>
                            <ul className='projectfilter__list-options'>
                                <label htmlFor="all"><li><input type="radio" name="category" value="all" id="all" /> All</li></label>
                                <label htmlFor="3d"><li><input type="radio" name="category" value="3d" id="3d" /> 3D</li></label>
                                <label htmlFor="graphic_design"><li><input type="radio" name="category" value="graphic_design" id="graphic_design" /> Graphic Design</li></label>
                                <label htmlFor="motion_design"><li><input type="radio" name="category" value="motion_design" id="motion_design" /> Motion Design</li></label>
                                <label htmlFor="new_media"><li><input type="radio" name="category" value="new_media" id="new_media" /> New Media</li></label>
                                <label htmlFor="photography"><li><input type="radio" name="category" value="photography" id="photography" /> Photography</li></label>
                                <label htmlFor="video"><li><input type="radio" name="category" value="video" id="video" /> Video</li></label>
                                <label htmlFor="web_design"><li><input type="radio" name="category" value="web_design" id="web_design" /> Web Design</li></label>
                            </ul>
                        </li>
                        <li className='projectfilter__list-item'>
                            <p className='projectfilter__lable'>Designer</p>
                            <ul className='projectfilter__list-options'>
                                <label htmlFor="all2"><li><input type="radio" name="designer" value="all" id="all2" /> All</li></label>
                                <label htmlFor="ines"><li><input type="radio" name="designer" value="ines" id="ines" /> Inês</li></label>
                                <label htmlFor="joao"><li><input type="radio" name="designer" value="joao" id="joao" /> João</li></label>
                                <label htmlFor="jose"><li><input type="radio" name="designer" value="jose" id="jose" /> José</li></label>
                            </ul>
                        </li>
                        <li>
                            <div className="search-header">
                                <div className="search-text">
                                    <div className='form'>
                                        <input id="search-box" onChange={filterBySearch} type="search" required /> <i className="fa fa-search"></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="masonry">
                {filteredList.map((item, index) => {
                    // return console.log(projects[index])
                    // return <p key={index}>{item[1].slug}</p>
                    return <div key={index} className="grid">
                        <img src={item[1].acf.image_0.url} alt="" />
                        <div className="grid__body">
                            <div className="relative">
                                <a className="grid__link" href={`/DesenvolvimentoWeb/work/${item[1].id}`} > </a>
                                <h1 className="grid__title">{item[1].title.rendered}</h1>
                                <p className="grid__author">{item[1].acf.author}</p>
                            </div>
                            <div className="mt-auto" >
                                {
                                    item[1].acf.categories.map((category, index) => {
                                        return <span key={index} className="grid__tag">{category}</span>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default WorksPage
