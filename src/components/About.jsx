import { useState } from "react";

const About = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
        return currentTodos.map(todo => {
            if(todo.id === id) {
                return { ...todo, completed }
            }

            return todo
        })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id)
    })
  }



  return (
    <div className="fist">
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 justify-center flex-col p-10"
      >
        <div>
          <label htmlFor="item">Add New Item</label> <br />
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            name=""
            id="text"
            className="rounded-md bg-blue-700 pl-2"
            placeholder="Item Name..."
            required
          />
        </div>
        <button className="rounded-md bg-slate-600 text-black font-semibold flex justify-center">
          Add
        </button>
      </form>

      <h1 className="px-5 font-bold text-2xl pt-2">Todo List</h1>
      <ul className="px-8 pt-2">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="flex flex-row space-x-2 py-2">
              <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.completed)} />
              <label className="text-2xl">{todo.title}</label>
              <button onClick={() => deleteTodo(todo.id)} className="font-bold text-red-600 bg-red-200 p-1 rounded-md">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default About;
