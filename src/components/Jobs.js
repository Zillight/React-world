import React from 'react'

const Job = (props) => {
    return (
        <div>
            <h3>{props.salary}</h3>
            <h3>{props.position}</h3>
            <h3>{props.company}</h3>
        </div>
    )
}

export default Job