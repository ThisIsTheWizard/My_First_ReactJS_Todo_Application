import React from "react";

// Importing Components
import Todo from "./todo";

const Todos = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  category,
  setCategory,
  filteredTodos
}) => {
  // Handling Input Text Value
  const inputTextHandler = e => {
    setInputText(e.target.value);
  }

  // Adding New Todo
  const addTodo = e => {
    e.preventDefault();
    if (inputText.length > 1) {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          title: inputText,
          completed: false
        }
      ]);
      setInputText("");
    } else {
      alert("Type something to the field");
    }
  }

  // Filtering Function For Changing Category
  const changeCategory = (e) => {
    setCategory(e.target.value);
  }

  return (
    <section className="todos">
      <form onSubmit={ addTodo } style={{ display: 'flex', margin: '1rem 0' }}>
        <input
          type="text"
          value={ inputText }
          placeholder="Type Anything As Todo..."
          onChange={ inputTextHandler }
          style={{ flex: '5', border: '1px solid rgba(0, 0, 0, 0.1)', padding: '0.2rem 0.5rem' }}
        />
        <button
          type="submit"
          style={{ flex: '1', border: '1px solid rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(7, 40, 63, 1)', color: '#fff', fontWeight: '550' }}
        >
          Add Todo
        </button>
      </form>

      <select
        value={ category }
        onChange={ changeCategory }
        style={{ width: '50%', margin: '0 auto', border: '1px solid rgba(0, 0, 0, 0.1)', padding: '0.2rem' }}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>

      <ul style={{ margin: '1rem 0', listStyle: 'none', color: '#fff', fontWeight: '550', padding: '0' }}>
        {
          filteredTodos.sort((a, b)=> a.id < b.id).map(todo =>
            <Todo todo={ todo }  todos={ todos } setTodos={ setTodos } key={ todo.id } />
          )
        }
      </ul>
    </section>
  );
}

export default Todos;
