import React, { FC, useState, ChangeEvent } from 'react';
import { ITask } from './Interfaces';
import './App.css';
import ToDoTask from './components/ToDoTask';

const App: FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todos, setTodos] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') setTask(event.target.value)
    else setDeadline(Number(event.target.value))
    
  }

  const addToList = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline
    }
    setTodos([...todos, newTask])
    setTask("")
    setDeadline(0)
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='input_container'>
        <input type="text" value={task} placeholder='Task..' name='task' onChange={handleChange}/>
        <input type="number" value={deadline} placeholder='Deadline (in Days)..' name='deadline' onChange={handleChange}/>
        </div>
        <button onClick={addToList}>Add Task</button>
      </div>
      <div className='todoList'>
        {
          todos.map((todo: ITask, i: number) => {
            return <ToDoTask key={i} todo={todo}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
