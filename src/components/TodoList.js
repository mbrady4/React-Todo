import React from 'react';
import ToDo from './Todo.js';

const ToDoList = (props) => {

    return (
        <div>
            {props.todos.map( (todo) => {
                return <ToDo todo={todo} key={todo.id}
                             markComplete={props.markComplete} />
            })}
        </div>
    )
}

export default ToDoList;