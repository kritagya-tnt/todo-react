
import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setnewTask] = useState("");
  
  const handleChange = (event)=>{
    setnewTask(event.target.value);
  }

  const todo = () =>{
    const task = {
      id : todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      title : newTask,
      completed : false
    }
    setTodoList([...todoList,task]);
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task)=> task.id !== id));
  }

  const completeTask = (id) => {
    setTodoList(todoList.map((task)=>{
      if(task.id === id){
        return {...task, completed : true}
      }else {
        return task;
      }
    }))
  }

  return (
    <div className="App">
      <input onChange={handleChange}/>
      <button onClick={todo}>Add Task</button>
      <div>
      {todoList.map((task)=>{
          return <Task key={task.id} title={task.title} id={task.id} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask}/>
        })}
      </div>

    </div>
  );
}

export default App;
