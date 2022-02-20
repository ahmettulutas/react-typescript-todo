
interface Todo {
    text:string,
    complete:boolean,
    id:number
}
interface Props {
    todo:Todo,
    toggle:ToggleTodo
}
const TodoItem = ({todo, toggle}: Props) => {
  return (
        <div className="todo-item" style={{textDecoration: todo.complete ? "line-through": undefined}}>
            <input onClick={() => {toggle(todo.id)}} type="checkbox" checked={todo.complete} /> {todo.text}
        </div>   
  )
}
export default TodoItem;

