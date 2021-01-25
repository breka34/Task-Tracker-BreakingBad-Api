import React from 'react'
import { FaTimes } from "react-icons/fa";
const Task = ({task, onDelete}) => {
    return (
        <div className="task">
            <h3>
            {task.text} <FaTimes className="fa" style={{color: 'red', cursor: 'pointer'}} 
            onClick={() => onDelete(task.id)}
            />
            </h3>
            <span>{task.day}</span>
        </div>
    )
}

export default Task
