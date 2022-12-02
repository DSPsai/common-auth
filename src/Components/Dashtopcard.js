import React from 'react'

export default function Dashtopcard({ data }) {
    return (
        <div className='dash-top-card-container'>
            <div className='dashtop-row1-card-svg'>{data.icon}</div>
            <div className="dash-top-card-title">{data.title}</div>
            <div className="dash-top-card-highlight">{data.highlight}</div>
        </div>
    )
}
