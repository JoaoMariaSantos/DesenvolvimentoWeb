import React, { useEffect } from 'react'

const Loading = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            addBlock(document.querySelector('#loading div'));
        }, 1000);
        return () => clearInterval(interval)
    }, []);

    return (
        <div id='loading'>
            <div>
            </div>
        </div>
    )
}

function addBlock(element){
    const block = document.createElement('div');
    const span = document.createElement('span');
    span.innerHTML = 'grä';

    const randValue = Math.floor(Math.random() * 15);
    if(randValue === 1){
        span.classList.add('text--red');
    } else if(randValue === 2){
        span.classList.add('text--green');
    } else if(randValue === 3){
        span.classList.add('text--blue');
    }

    block.append(span);
    element.append(block);
}

export default Loading