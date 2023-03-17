import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
  todo: ITask;
  completeTask(taskNameToDelete: string): void
}

const ToDoTask = ({ todo, completeTask }: Props) => {
  return (
    <div className='task'>
      <div className='content'>
        <span>{todo.taskName}</span>
        <span>{todo.deadline}</span>
      </div>

      <button onClick={() => completeTask(todo.taskName)}>x</button>
    </div>
  )
}

export default ToDoTask