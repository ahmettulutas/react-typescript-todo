# SIMPLE (TO-DO APP) WITH TYPESCRIPT AND REACT
This is a simple To-do app I created for complete **TypeScript** beginners.
## HOMEWORK FOR YOU :neckbeard:
When you understand this code, fork it and **try to add deleting the task feature to this application**. Don't forget to use Typescript 
## LET'S BEGIN
To create a react app with typescript in your command line type following;
```
npx create-react-app my-app --template typescript
```

We have three different components.

1. Form
2. TodoList
3. TodoItem

Here is a sample component, TodoItem. This is where we'll start typescripting.

**Try to understand the logic for this Functional Component. 
If you do so, all other two components have the same logic while typescripting their props.**

```
// You can declare your types here. This is the first option.
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


```

**Bonus: I have an interesting tip for typescript beginners :bowtie:**
# Creating a Type Declaration File
While we could keep Todo declared in this file, we need to use it throughout the app. In order to use Todo type interface let's create a type declaration file. Let’s call this "types.d.ts" and put it in our src folder. What’s nice about this types.d.ts file is our compiler will recognize the types in there as global to the project and we won’t need to import or export them.

### types.d.ts

```
interface Todo {
    text:string,
    complete:boolean,
    id:number
}
```

### adding handleToggle or other functions into types.d.ts
```
interface Todo {
    text:string,
    complete:boolean,
    id:number
}

type ToggleTodo = (id:number) => void; 
type AddTodo = (input:string) => void;
```
