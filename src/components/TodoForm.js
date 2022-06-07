import { useState } from "react";

function TodoForm({ onSubmit }) {
    const [todo, setTodo] = useState('');

    function handleChange(e) {
        setTodo(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(todo)
        setTodo('')
    }

    return (
        <div className="mx-5">
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text"
                        className="form-control"
                        placeholder="Todo item..."
                        value={todo}
                        onChange={handleChange}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                    >
                        Add todo
                    </button>

                </div>
            </form>
        </div >
    );
}
export default TodoForm