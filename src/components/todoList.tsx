import React from 'react'
import TodoItem from './todoItem'
interface Props {
  todos:Todo[],
  toggle:ToggleTodo
}
function TodoList({todos, toggle}: Props) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} toggle={toggle} />
      ))}
    </ul>
  )
}
export default TodoList;
