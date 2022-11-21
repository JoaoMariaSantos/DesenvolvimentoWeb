import React, { useState, useEffect } from 'react'

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

    const randValue = Math.floor(Math.random() * 10);
    if(randValue > 5){
        if(randValue == 6){
            span.classList.add
        }
    }

    block.append(span);
    element.append(block);
}

export default Loading