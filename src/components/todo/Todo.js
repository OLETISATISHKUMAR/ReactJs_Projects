import React, { useState } from 'react';
import './Todo.css';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleAddTodo = () => {
        if(input === ""){
            alert(" Enter New Task ")
        }
        else if (input.trim() !== '') {
            setTodos([...todos, { id: Date.now(), task: input }]);
            setInput('');
        }
    };

    const handleDeleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <div className="todo-container"> {/* Add a class for styling */}
            <h1>Todo List Application</h1>
            <div className="add-todo">
                <input
                    type="text"
                    placeholder="Enter a new task"
                    value={input}
                    onChange={handleInputChange}
                />{" "}
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        {todo.task}
                        <button className='delete-todo' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
