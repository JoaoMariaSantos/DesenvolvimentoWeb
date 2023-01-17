import React, { useEffect, useState } from "react";
import { API_URL } from '../api/api';

export default function Test() {

    const [projects, setProjects] = useState();
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
                    if (data[i].slug === itemList[i]) {
                    } else {
                        itemList.push(data[i].slug)
                    }
                }
                setItemList(itemList)
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
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };

  console.log(projects)

  return (
    <div className="Test">
      <div className="search-header">
        <div className="search-text">Search:</div>
        <input id="search-box" onChange={filterBySearch} />
      </div>
      <div id="item-list">
        <ol>
          {filteredList.map((item, index) => (
            <li key={index}>{projects[index].status}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}