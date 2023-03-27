import React from 'react'

const User = (props) => {
    return (
            <div>
            <h2> {props.name}</h2>
            <h2> {props.age}</h2>
            <h2> {props.aim}</h2>
        </div>    
    )
    
}

export default User