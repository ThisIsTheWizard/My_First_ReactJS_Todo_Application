import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Todos from "./components/todos";

const App = () => {
  // State Initization
  const [ inputText, setInputText ] = useState("");
  const [ todos, setTodos ] = useState([]);
  const [ category, setCategory ] = useState("all");
  const [ filteredTodos, setFilteredTodos ] = useState([]);

  // Using Effect For Filtering Todos
  useEffect(() => {
    const filterTodos = () => {
      switch (category) {
        case "completed":
          setFilteredTodos(todos.filter(t => t.completed === true));
          break
        case "uncompleted":
          setFilteredTodos(todos.filter(t => t.completed === false));
          break;
        default:
          setFilteredTodos(todos);
      }
    }
    filterTodos();
  }, [ todos, category ]);

  // Fetching Fake Todos
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json));
  }, [])

  return (
    <Router>
      <div className="layout" style={{ textAlign: 'center' }}>
          <Switch>
            <Route path="/" exact>
              <div className="container" style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}>
                <header style={{ backgroundColor: 'rgba(7, 40, 63, 1)', padding: '0.5rem', color: '#fff' }}>
                  <h1>TODO LIST</h1>
                </header>
                <Todos
                  inputText={ inputText }
                  setInputText={ setInputText }
                  todos={ todos }
                  setTodos={ setTodos }
                  category={ category }
                  setCategory={ setCategory }
                  filteredTodos={ filteredTodos }
                />
              </div>
            </Route>

            <Route path="*">
              <div className="404_page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <h1 style={{ textAlign: 'center' }}>Sorry, there is nothing to show in this route!!!</h1>
              </div>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
