import React from 'react';
import ToDoList from './components/TodoList.js';
import ToDoForm from './components/TodoForm.js';
import Clear from './components/clear.js';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos : [],
      formValue : ''
    }
  }

  handleInput = (event) => {
    this.setState({ formValue: event.target.value });
  }

  addTask = (event) => {
    event.preventDefault()
    console.log(this.state.formValue);
    const newTask = {
      task: this.state.formValue,
      id: Date.now(),
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTask]});
  };

  markComplete = (event) => {
    console.log('fired');
    console.log(event);
    const tempTasks = this.state.todos
    for (var i in tempTasks) {
      if (tempTasks[i].id === event.id) {
        tempTasks[i].completed = !tempTasks[i].completed;
        break;
      }
    }
    console.log(tempTasks);
    this.setState({todos: tempTasks})
  }

  clearComplete = () => {
    const tempTasks = this.state.todos.filter( (task) => task.completed === false);
    this.setState({todos:tempTasks});
  }
  
  render() {
    return (
      <div>
        <h2>Task Manager</h2>
        { this.state.todos.length > 0
            ? <Clear clearComplete={this.clearComplete} />
            : null } 
        <ToDoList todos={this.state.todos} 
                  markComplete={this.markComplete} />
        <ToDoForm addTask={this.addTask} 
                  handleInput={this.handleInput} 
                  value={this.state.formValue}/>
      </div>
    );
  }
}

export default App;

/* 

// APP 
import ToDoList, ToDoForm

this.state{ 
  // array of todo objects
}

addToDo = (e) => {
  // Add To Do to list
}

markComplete = (e) => {
  // toggle elemnt to be complete
}

clearCompleted = (e) => {
  // clear all completed todos from state
}

render() {
  <h2>Title</h2>
  <Clear Completed onClick={clearCompleted}/>
  <ToDoList todos={props.state.todos} complete={markComplete}/>
  <ToDoForm onClick={addToDo} />
}

// ToDoList 
import ToDo

render() {
  props.todos.map( (todo) => {
    return <ToDo todo={todo} key={todo.id} complete={props.markComplete} />
  })
}

*/ 

