import React from 'react'
import Todo from './Todo'

import { v4 as uuidv4 } from 'uuid'

export default function TodoList(props){

    const {tasks, markAsDone} = props

    return (
        tasks.map(task => {
            return(
                <Todo key={uuidv4()} tasks={task} markAsDone={markAsDone} />
            )
        })
    )
}
