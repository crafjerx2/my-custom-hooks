import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    dispatch({
      type: '[todo]: add todo',
      payload: todo
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[todo]: delete todo',
      payload: id
    });
  };

  const handleToggle = (id) => {
    dispatch({
      type: '[todo]: toggle todo',
      payload: id
    });
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggle,
    todosCount: todos.length,
    todosPendingCount: todos.filter(todo => !todo.done).length
  }

}
