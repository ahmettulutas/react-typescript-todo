import React from 'react'
import TodoItem from './todoItem'
interface Props {
  todos:Todo[],
  toggle:ToggleTodo
}
function TodoList({todos, toggle}: Props) {
 
  return (
    <ul>
      { todos.map((todo) => {
        console.log(todo)
        //bunu yapmamın sebebi state boş dizi olarak atasamda default olarak bir todo id generate ediyor ve dizi aslında boş olmuyor 
        //bu sorunu çözebilirsin
       return todo.text === "" ? (<h2>Please Add Todos Here</h2>) : (<TodoItem todo={todo} toggle={toggle} />)
      })}
    </ul>
  )
}
export default TodoList;
