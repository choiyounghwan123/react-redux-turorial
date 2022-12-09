import React from "react";

const TodoItem = ({ todo, onRemove, onToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        readOnly={true}
        onClick={() => onToggle(todo.id)}
      ></input>
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button
        onClick={() => {
          onRemove(todo.id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onChange = (e) => {
    onChangeInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onToggle={onToggle}
          ></TodoItem>
        ))}
      </div>
    </div>
  );
};

export default Todos;
