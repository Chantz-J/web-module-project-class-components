import React from 'react'

const marked = {
    textDecoration: 'line-through'
}

export default function Todo(props){
    const {tasks, markAsDone} = props

    return(
        <h5 onClick={() => markAsDone(tasks.id)}
        style={tasks.completed ? marked : null}
        >{tasks.task}</h5>
    )
}