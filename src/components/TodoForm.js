import { useState, useRef } from "react";

function TodoForm({ onSubmit }) {
    const input = useRef(null)
    const [todo, setTodo] = useState('');

    function handleChange(e) {
        setTodo(e.target.value)
        // input.current = e.target.value

    }

    function handleSubmit(e) {
        e.preventDefault()
        // onSubmit(input.current)
        onSubmit(todo)
        setTodo('')
    }

    return (
        <div className="mx-5">
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text"
                        ref={input}
                        className="form-control"
                        placeholder="Todo item..."
                        value={todo}
                        onChange={handleChange}
                    />


                </div>
            </form>
        </div>
    );
}
export default TodoForm