import React from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (todo.id === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li className="list-item" key={todo.id}>
            <input
              type="text"
              className={`list ${todo.completed ? "complete" : ""}`}
              value={todo.title}
            />
            <div>
              <button
                className="button-complete task-button"
                onClick={() => {
                  handleComplete(todo);
                }}
              >
                <i className="fa fa-check-circle"></i>
              </button>
              <button
                className="button-edit task-button"
                onClick={() => handleEdit(todo)}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="button-edit task-button"
                onClick={() => handleDelete(todo)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
