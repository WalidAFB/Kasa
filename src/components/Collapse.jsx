import React from 'react'

import '../styles/Collapse.css'

function Collapse({ content, title }) {
    const isList = Array.isArray(content)

    return (
        <details className="collapse-container">
            <summary className="collapse__title">{title}</summary>
            {isList ? (
                <div className="collapse__content">
                    <ul className="collapse__list">
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="collapse__content">
                    <p className="collapse__text">{content}</p>
                </div>
            )}
        </details>
    )
}

export default Collapse
