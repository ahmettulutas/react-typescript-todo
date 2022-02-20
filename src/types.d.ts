interface Todo {
    text:string,
    complete:boolean,
    id:number
}

type ToggleTodo = (id:number) => void; 
type AddTodo = (input:string) => void;