import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useTodoStorage } from "./useTodoStorage";


const defaultValue = {
    todos: [],
    onSubmit: () => { },
    toggleTodo: () => { },
    deleteTodo: () => { }
};

const TodosContext = createContext(defaultValue);

function TodosProvider({ children }) {
    const [todos, setTodos] = useTodoStorage("todos");

    function addTodo(todo) {
        if (todo === "") {
            return;
        }
        setTodos([
            ...todos,
            { id: new Date().valueOf(), name: todo, isComplete: false },
        ]);
    }

    function toggleTodo(id) {
        const updateTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
        );
        setTodos([...updateTodos]);
    }
    function deleteTodo(id) {
        const updateTodos = todos.filter((todo) => todo.id !== id);
        setTodos([...updateTodos]);
    }
    return (
        <TodosContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
            {children}
        </TodosContext.Provider>
    )
}
function useTodos() {
    return useContext(TodosContext);
}

export { useTodos, TodosProvider };
