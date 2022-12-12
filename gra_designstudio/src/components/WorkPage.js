import React from 'react'
import { useParams } from 'react-router-dom'

const WorkPage = () => {
    const { id } = useParams();
    return (
        <div>
            <p>Ola - {id}</p>
        </div>
    )
}

export default WorkPage
