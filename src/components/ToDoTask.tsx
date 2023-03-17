import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
  todo: ITask;
}

const ToDoTask = ({ todo }: Props) => {
  return (
    <div className='todo'>
      <div className='content'>
        <span>{todo.taskName}</span>
        <span>{todo.deadline}</span>
      </div>

      <button>x</button>
    </div>
  )
}

export default ToDoTask