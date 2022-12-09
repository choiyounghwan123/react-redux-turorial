const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";
const CHANGE_INPUT = "todos/CHANGE_INPUT";

export const remove = (id) => ({
  type: REMOVE,
  id,
});
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3;

export const insert = (input) => ({
  type: INSERT,
  todo: {
    id: id++,
    text: input,
    done: false,
  },
});

const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

function todos(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case INSERT:
      return { ...state, todos: state.todos.concat(action.todo) };
    case TOGGLE:
      return {};
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.id),
      };
    case CHANGE_INPUT:
      return { ...state, input: action.input };
    default:
      return state;
  }
}

export default todos;
