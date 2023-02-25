import React from 'react'

import '../styles/Tags.css'

function Tag({ tags }) {
    return (
        <div className='tags-container'>
            {tags.map((tag, index) => { 
                return <p className='tags__text' key={index}>{tag}</p>
            })}
        </div>
    )
}

export default Tag
