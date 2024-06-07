import { useState } from 'react';
import TaskForm from './TaskForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function TaskTodo({ task, toggleComplete, editTask, deleteTask }) {
    return (
        <div className='Todo'>
            <p className={`${task.completed ? 'completed' : 'incompleted'}`}
                onClick={() => toggleComplete(task.id)}>
                {task.task}
            </p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTask(task.id)}/>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />
            </div>
        </div>
    )
}