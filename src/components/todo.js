import React from "react";

const Todo = ({ todo, todos, setTodos } ) => {
  // Delete Todo
  const deleteTodo = () => {
    setTodos(todos.filter(t => t.id !== todo.id));
  }

  // Toggle Completed Value
  const completeTodo = () => {
    setTodos(todos.map(t => {
      if (t.id === todo.id) {
        t.completed = !t.completed
      }
      return t;
    }));
  }

  return (
    <li style={{
      margin: '0.2rem 0',
      backgroundColor: 'rgba(7, 40, 63, 1)',
      padding: '0.3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      { todo.completed ? <input type="checkbox" onChange={ completeTodo } checked /> : <input type="checkbox" onChange={ completeTodo } /> }
      <p style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        flex: '1',
        textAlign: 'left',
        margin: '0',
        padding: '0 0.5rem',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }}>
        { todo.title }
      </p>
      <button style={{ cursor: 'pointer' }} onClick={ deleteTodo }>Delete</button>
    </li>
  )
}

export default Todo;
