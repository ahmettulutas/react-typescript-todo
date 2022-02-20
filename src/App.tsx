import { useState } from 'react';
import Form from "./components/form";
import TodoList from "./components/todoList";

const initialTodos: Todo[] = [
  {text: 'Learn about React', complete: false, id:42},
  {text: 'Meet friend for lunch', complete: true, id:43},
]
function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos); //state üzerinde de kullanabiliriz
  // idyi Todo yap bakalım ne olacak?
  const handleToggle:ToggleTodo = (id:number) => {
    const newTodos:Todo[] = todos.map(todo => {
        if(todo.id === id) {
          return ({...todo, complete:!todo.complete})
        }
        return todo
      
    })
    setTodos(newTodos);
  }
  const handleAddTodo:AddTodo = (input:string) => {
    const newTodo = {
      text:input,
      complete:false,
      id: Math.floor(Math.random()* 9999999)
    };
    setTodos([...todos, newTodo])
  }
  
  const handleDeleteTodos:DeleteTodos = () => {
    setTodos([])
  }

 
  return (
    <div className="App">   
      <TodoList toggle={handleToggle} todos={todos} />
      <Form addTodo={handleAddTodo} deleteTodos= {handleDeleteTodos}/>
    </div>
  );
}

export default App;
