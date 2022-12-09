import React from "react";
import { connect } from "react-redux";
import Todos from "../components/Todos";
import { remove, changeInput, insert } from "../modules/todos";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  remove,
  toggle,
  insert,
}) => {
  return (
    <Todos
      todos={todos}
      input={input}
      onChangeInput={changeInput}
      onRemove={remove}
      onToggle={toggle}
      onInsert={insert}
    ></Todos>
  );
};
const mapStateToProps = (state) => ({
  input: state.todos.input,
  todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch) => ({
  changeInput: (input) => {
    dispatch(changeInput(input));
  },
  remove: (id) => {
    dispatch(remove(id));
  },
  toggle: () => {},
  insert: (input) => {
    dispatch(insert(input));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
