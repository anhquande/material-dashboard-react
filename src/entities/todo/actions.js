import {
  FETCH_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_STARTED,
  FETCH_TODOS_FINISHED,
  FETCH_TODOS_ERROR
} from "./constants";

export function fetchTodos() {
  return {
    type: FETCH_TODOS
  };
}

export function fetchTodosStarted() {
  return {
    type: FETCH_TODOS_STARTED
  };
}

export function fetchTodosFinished(todos) {
  return {
    type: FETCH_TODOS_FINISHED,
    todos
  };
}

export function fetchTodosFailed(errno, errmsg) {
  return {
    type: FETCH_TODOS_ERROR,
    errno: errno,
    errmsg: errmsg
  };
}

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id: id
  };
}
