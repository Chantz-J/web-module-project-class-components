import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import todoData from './components/data/todoData'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      task: todoData
    }
  }

  markAsDone = (markedId) => {
    this.setState({
      task: this.state.task.map((t) => {
        if (t.id === markedId){
          return {
            ...t, 
            completed: !t.completed
          } 
        } else {
          return t
        }
      })
    })
  }

  addTask = (task) => {
    const newTask = {
        task: task,
        id: uuidv4(),
        completed: false,
    }
    this.setState({
      task: [...this.state.task, newTask]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        tasks={this.state.task} 
        markAsDone={this.markAsDone}
        />
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
 