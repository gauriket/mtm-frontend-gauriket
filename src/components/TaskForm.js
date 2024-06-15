
import React, {useState} from 'react'

export const TaskForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TaskForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="task-input" placeholder='What is the task today?' />
    <button type="submit" className='task-btn'>Add Task</button>
  </form>
  )
}
