import { useState } from 'react';


export default function TaskForm({ addTodo }) {
    const [content, setContent] = useState('');

    function handleType(e) {
        setContent(e.target.value);
    }

    const handleSubmit = e => {
        // prevent browse default action
        e.preventDefault();
        addTodo(content);
        setContent('');
    }
    

    return (
        <form className='TodoForm' onSubmit={(e) => handleSubmit(e)}>
            <input value={content} className='todo-input' type='text' placeholder='What is the task today?' onChange={(e) => handleType(e)}/>
            <button className='todo-btn' type='submit'>Add Task</button>
        </form>


    )

}