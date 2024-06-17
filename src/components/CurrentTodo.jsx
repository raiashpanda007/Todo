import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useTodo } from '../context/TodoContext';

function CurrentTodo({ todo }) {
    const { updateTodo, removeTodo, toggleTodo } = useTodo();
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todoName);

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todoName: todoMsg });
        setIsTodoEditable(false);
    };
    const toggleComplete = () => {
        toggleTodo(todo.id);
    };

    return (
        <div className={todo.completed ? 'TodoContainer-complete' : 'TodoContainer'}>
            <input type="checkbox" checked={todo.completed} onChange={toggleComplete} className='checkbox' />
            <input type="text" value={todoMsg} onChange={(e) => setTodoMsg(e.target.value)} readOnly={!isTodoEditable} />
            <div className="Options">
                <div className="edit">
                    <FontAwesomeIcon icon={faPenToSquare} className='icon' onClick={() => {
                        if (todo.completed) return;
                        if (isTodoEditable) {
                            editTodo();
                        } else {
                            setIsTodoEditable(prev => !prev);
                        }
                    }} />
                </div>
                <div className="delete">
                    <FontAwesomeIcon icon={faTrash} className='icon' onClick={() => removeTodo(todo.id)} />
                </div>
            </div>
        </div>
    );
}

export default CurrentTodo;
