import React, { useEffect, useState } from 'react'
import { API_URL } from '../api/api';

const WorksPage = () => {
    const [projects, setProjects] = useState();
    const [projectIds, setProjectIds] = useState([]);
    const [itemList, setItemList] = useState([]);
    // let author = document.querySelectorAll(".grid__author")

    // function getBackgroundColor() {
    //     const colors = [
    //         '#f53d4c',
    //         '#4ce59f',
    //         '#474AEB'
    //     ]
    //     let color;
    //     author.forEach((i) => {
    //         console.log(i.innerText)
    //         if (i.innerText == "Inês Pereira") {
    //            color = colors[1]
    //         } else if (i.innerText == "José Antunes") {
    //             color = colors[0]
    //         } else {
    //             color = colors[2]
    //         }
    //     })
    //   return color
    //     // return colors[Math.floor(Math.random() * colors.length)];
    // }

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
                        let projectName = data[i].slug.split('-').join(' ');
                        let projectCategory = data[i].acf.categories
                        let projectAuthor = data[i].acf.author[0]
                        itemList.push([projectName, data[i], projectCategory, projectAuthor])
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

    console.log(itemList)

    const [filteredList, setFilteredList] = new useState(itemList);

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...itemList];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            let filter = item[0].toLowerCase().indexOf(query.toLowerCase()) !== -1;
            return filter;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
        // console.log(filteredList)
    };

    const onChangeCategory = (event) => {
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...itemList];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            if (event.target.value !== "All") {
                let filter = item[2][0].toLowerCase().indexOf(query.toLowerCase()) !== -1;
                return filter
            } else {
                return updatedList = [...itemList];
            }
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
        // console.log(filteredList)
    }

    const onChangeAuthor = (event) => {
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...itemList];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            if (event.target.value !== "All") {
                return item[3].toLowerCase().indexOf(query.toLowerCase()) !== -1;
            } else {
                return updatedList = [...itemList];
            }
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
        // console.log(filteredList)
    }
    function getClipPath() {
        const clipPathOptions = [
            'polygon(50% 0%, 0% 100%, 100% 100%)',
            'circle(50% at 50% 50%)',
            'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)',
            'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
            'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
        ]

        return clipPathOptions[Math.floor(Math.random() * clipPathOptions.length)];
    }
    let blcks = document.querySelectorAll(" img")
    blcks.forEach(a => {
        a.style.clipPath = getClipPath();
        // a.addEventListener("mouseover", () => {
        // a.src = ""
        // a.style.backgroundColor = getBackgroundColor()
        // // })
        // a.addEventListener("mouseover", () => {
        //     a.style.backgroundColor = "none"
        // })
    })
    return (
        <div className='workspage'>
            <div className='projectfilter'>
                <h2 className='projectfilter__title text--headings text--underline'>Projects</h2>
                <div className='projectfilter__header'>
                    <ul className='projectfilter__unordered-list'>
                        <li className='projectfilter__list-item'>
                            <p className='projectfilter__lable'>Categories</p>
                            <ul className='projectfilter__list-options' onChange={onChangeCategory}>
                                <label htmlFor="all"><li><input type="radio" name="category" value="All" id="all" /> All</li></label>
                                <label htmlFor="3d"><li><input type="radio" name="category" value="3D" id="3d" /> 3D</li></label>
                                <label htmlFor="game_design"><li><input type="radio" name="category" value="Game Design" id="game_design" /> Game Design</li></label>
                                <label htmlFor="graphic_design"><li><input type="radio" name="category" value="Graphic Design" id="graphic_design" /> Graphic Design</li></label>
                                <label htmlFor="motion_design"><li><input type="radio" name="category" value="Motion Design" id="motion_design" /> Motion Design</li></label>
                                <label htmlFor="new_media"><li><input type="radio" name="category" value="New Media" id="new_media" /> New Media</li></label>
                                <label htmlFor="photography"><li><input type="radio" name="category" value="Photography" id="photography" /> Photography</li></label>
                                <label htmlFor="video"><li><input type="radio" name="category" value="Video" id="video" /> Video</li></label>
                                <label htmlFor="web_design"><li><input type="radio" name="category" value="Web Design" id="web_design" /> Web Design</li></label>
                            </ul>
                        </li>
                        <li className='projectfilter__list-item'>
                            <p className='projectfilter__lable'>Designer</p>
                            <ul className='projectfilter__list-options' onChange={onChangeAuthor}>
                                <label htmlFor="all2"><li><input type="radio" name="designer" value="All" id="all2" /> All</li></label>
                                <label htmlFor="ines"><li><input type="radio" name="designer" value="Inês Pereira" id="ines" /> Inês</li></label>
                                <label htmlFor="joao"><li><input type="radio" name="designer" value="João Santos" id="joao" /> João</li></label>
                                <label htmlFor="jose"><li><input type="radio" name="designer" value="José Antunes" id="jose" /> José</li></label>
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
                    // let itemsPerDesigner;

                    // console.log(item)
                    // return <p key={index}>{item[1].slug}</p>
                    //  if (item[1].acf.author == 'Inês Pereira'){ itemsPerDesigner.push(filteredList[index]
                    //  console.log(itemsPerDesigner)}
                    // let itemsPerDesigner = document.querySelectorAll('.grid')
                    // const designerList = []
                    // itemsPerDesigner.forEach((item, index) => {
                    // console.log('oooo  ' + index)
                    // for (var i = 0; i < itemsPerDesigner.length; i++) {
                    //     if (itemsPerDesigner[i].textContent == 'Inês Pereira') {
                    //       designerList = itemsPerDesigner[i];
                    //       break;
                    //     }
                    //   }
                    // console.log('oooo  ' + index)

                    // })
                    // console.log(item[1].acf.author == 'Inês Pereira', index);
                    return <div key={index} className="grid">
                        <img src={item[1].acf.image_0.url} alt="" />

                        <div className="grid__body">
                            <div className="relative">
                                <a className="grid__link" href={`/DesenvolvimentoWeb/#/work/${item[1].id}`} > </a>
                                <h1 className="grid__title">{item[1].title.rendered}</h1>
                                <p className="grid__author">{item[1].acf.author}</p>
                            </div>

                        </div>
                        <div className="mt-auto" >
                            {
                                item[1].acf.categories.map((category, index) => {
                                    return <span key={index} className="grid__tag">{category}</span>
                                })
                            }
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default WorksPage
