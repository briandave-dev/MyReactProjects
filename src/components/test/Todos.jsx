import React, { useEffect } from 'react'
import { useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [currentTodo, setCurrentTodo] = useState('')

    const handleSubmit = () => {
        // setTodos((todos) => {
        //     return todos.concat({
        //         text: currentTodo,
        //         id: Math.floor(Math.random() * 10)
        //     })
        // })

        const newTodo = {
            text: currentTodo,
            id: todos.length + 1
        }

        setTodos((prevTodos) => [...prevTodos, newTodo])
        setCurrentTodo('')
    }

    useEffect(() => {
        // localStorage.setItem('currentTodo', currentTodo)
        console.log(todos)
    }, [todos])

    function remove(id){
        setTodos((todos) => todos.filter((t) => id != t.id))
    }

  return (
    <div>
        <h1>Add a todo</h1>
        <input type="text" placeholder='Enter the todo' value={currentTodo} onChange={(e) => setCurrentTodo(e.target.value)} />
        <button type='submit' onClick={handleSubmit}>Add</button>
        <div>
            {todos.map(({text, id}) => (
                <div key={id} className='flex gap-4'>
                    <p>{text}</p>
                    <button onClick={() => remove(id)}>X</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Todos