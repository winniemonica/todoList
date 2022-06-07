import { useState } from "react"
import { useTodoStorage } from "../useTodoStorage"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

function TodoList() {
    const [todos, setTodos] = useTodoStorage("todos")

    function onSubmit(todo) {
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
    const todoItem = todos.map((d) => (
        <TodoItem
            key={d.id}
            {...d}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
        />
    ))

    return (

        <div>
            <h1>Todo List</h1>
            <TodoForm onSubmit={onSubmit} />
            {todoItem}
        </div>
    )
}
export default TodoList