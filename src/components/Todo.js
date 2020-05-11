import React from 'react';
import './Todo.css';

const ToDo = (props) => {
    return (
        <div>
        { props.todo.completed
            ? <button className='complete' 
                      onClick={() => props.markComplete(props.todo)}>{props.todo.task}</button>
            : <button onClick={() => props.markComplete(props.todo)}>{props.todo.task}</button>
        }
        </div>
    )
}

export default ToDo;