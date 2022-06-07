import { useTodoStorage } from "../useTodoStorage"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

function TodoList() {
    const [todos, setTodos] = useTodoStorage("todos")

    function onSubmit(todo) {
        if (todo === "") {
            return
        }
        setTodos([...todos, { id: todos.length, name: todo, isComplete: false }])
    }

    function toggleTodo(id) {
        const updateTodos = todos.map(todo => (todo.id === id) ? { ...todo, isComplete: !todo.isComplete } : todo)
        setTodos([...updateTodos])
    }
    function deleteTodo(id) {
        const updateTodos = todos.filter(todo => todo.id !== id)
        setTodos([...updateTodos])
    }
    const renderTodoItem = (items) => items.map((d) => (
        <TodoItem
            key={d.id}
            {...d}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
        />
    ))

    const complete = renderTodoItem(todos.filter(d => d.isComplete === false))
    const inComplete = renderTodoItem(todos.filter(d => d.isComplete === true))

    return (
        <div >
            <h1 className="my-3">Todo List</h1>
            <TodoForm onSubmit={onSubmit} />
            {complete}
            <div className="py-3"></div>
            {inComplete}

        </div>
    )
}
export default TodoList