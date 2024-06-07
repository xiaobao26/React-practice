import { useState } from 'react';


export default function EditTaskForm({ editTodo, task }) {
    const [content, setContent] = useState(task.task);

    function handleType(e) {
        setContent(e.target.value);
    }

    const handleSubmit = e => {
        // prevent browse default action
        e.preventDefault();
        editTodo(content, task.id);
        setContent('');
    }
    

    return (
        <form className='TodoForm' onSubmit={(e) => handleSubmit(e)}>
            <input value={content} className='todo-input' type='text' placeholder='update the task?' onChange={(e) => handleType(e)}/>
            <button className='todo-btn' type='submit'>Update Task</button>
        </form>


    )

}