import {useState} from "react";
interface Props {
    addTodo:AddTodo
    deleteTodos:DeleteTodos
}

export default function Form({addTodo, deleteTodos}: Props) {
    const [input, setInput] = useState<string>("");
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(input);
        setInput("");
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => {setInput((prev) => e.target.value)}} type="text" value={input}></input>
            <button type="submit">Add Todo</button>
            <button onClick={() => deleteTodos()}>Delete All Todos</button>
        </form>
    )
 }

