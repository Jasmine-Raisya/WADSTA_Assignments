import React, { useState } from 'react'

export const TodoForm = ({addToDo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim() === '') return; //only accpet non-empty task submission
        addToDo(value);

        setValue("");   
    }
    
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text"
                className="todo-input"
                value={value}
                placeholder="Enter task"
                onChange={(e) => setValue(e.target.value)}>
            </input>

            <button type="submit" className="todo-btn" disabled={value.trim() === ''}>
                Add Task</button>
        </form>
    )
}