import React from 'react';

const ToDoForm = (props) => {
    return (
        <form onSubmit={props.addTask}>
        <label>
        <input type='text'
                name='task'
                placeholder='Add Task...'
                value={props.formValue}
                onChange={props.handleInput}
                />
        </label>
        <button type='submit'>Add Task</button>
        </form>
        
    )
}

export default ToDoForm;