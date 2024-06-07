import { useState } from 'react';
import TaskForm from './TaskForm';
import { v4 as uuidv4 } from 'uuid';
import TaskTodo from './TaskTodo';
import EditTaskForm from './EditTaskForm';
uuidv4();

export default function TaskWrapper() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodos = ([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
        setTodos(newTodos);
        console.log('wrapper', newTodos);
    }

    const toggleComplete = taskId => {
        setTodos(todos.map(todo => todo.id === taskId ? { ...todo, completed: !todo.completed } : todo))
    }

    const editTask = taskId => {
        setTodos(todos.map((todo) => todo.id === taskId ? { ...todo, isEditing: !todo.completed } : todo))
    }

    const deleteTask = taskId => {
        setTodos(todos.filter((todo) => todo.id !== taskId));
    }

    const editTaskContent = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };


    return (
        <div className='TodoWrapper'>
            <h1>TO DO List</h1>
            <TaskForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTaskForm editTodo={editTaskContent} task={todo} />
                ) :
                    (
                        <TaskTodo
                            key={index}
                            task={todo}
                            toggleComplete={toggleComplete}
                            editTask={editTask}
                            deleteTask={deleteTask}
                        />
                    )
            ))}
        </div>
    )
}