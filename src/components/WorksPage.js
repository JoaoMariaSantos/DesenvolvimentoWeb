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
                // console.log(data)
                setProjects(data)

                for (let i = 0; i < data.length; i++) {
                    if (data[i].id === projectIds[i] || data[i].slug === itemList[i]) {
                    } else {
                        projectIds.push(data[i].id)
                        let str = data[i].slug.split('-').join(' ');
                        itemList.push([str,data[i]])
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
