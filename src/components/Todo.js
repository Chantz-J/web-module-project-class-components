import React from 'react'

export default function Todo(props){
    const {tasks} = props

    return(
        <h5>{tasks.task}</h5>
    )
}