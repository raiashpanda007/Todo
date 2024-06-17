import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TodoContext, TodoContextProvider } from './context/index'
import { ListCreator,CurrentTodo } from './components/componentIndex'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo)));
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => (prevTodo.id !== id)));
  }

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)));
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider value={{ todos, addTodo, updateTodo, removeTodo, toggleTodo }}>
      <div className="ParentDiv">
        <ListCreator />
        {todos.map((todoeach)=>(
          <div key={todoeach.id}
            className='eachTodo'
          >
            <CurrentTodo todo = {todoeach}/>

          </div>
        ))}
      </div>
    </TodoContextProvider>
  )
}

export default App
