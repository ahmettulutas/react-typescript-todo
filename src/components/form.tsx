import {useState} from "react";
interface Props {
    addTodo:AddTodo
}

export default function Form({addTodo}: Props) {
    const [input, setInput] = useState<string>("");
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(input);
        setInput("");
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>TODO-FORM</h1>
            <input placeholder="type here.." required onChange={(e) => {setInput((prev) => e.target.value)}} type="text" value={input}></input>
            <button type="submit">Add Todo</button>
        </form>
    )
    }

