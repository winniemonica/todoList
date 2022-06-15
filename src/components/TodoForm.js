import { useState, useRef } from "react";
import { useTodos } from "../useTodos";

function TodoForm() {
    const { addTodo } = useTodos()
    const input = useRef(null);
    const [inputTodo, setInputTodo] = useState("");

    function handleChange(e) {
        setInputTodo(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addTodo(inputTodo);
        setInputTodo("");
    }

    return (
        <div className="mx-5">
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        ref={input}
                        className="form-control"
                        placeholder="Todo item..."
                        value={inputTodo}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    );
}
export default TodoForm;
