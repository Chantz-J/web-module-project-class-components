import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super()
        this.state = {
            inputTask: '',
        }
    }

    handleChanges = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTask(this.state.inputTask)
        this.setState({
            inputTask: ''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                 type='text'
                 name='inputTask'
                 value={this.state.inputTask}
                 onChange={this.handleChanges} />
                 <button>Add A Task!</button>
            </form>
        )
    }
}
export default TodoForm