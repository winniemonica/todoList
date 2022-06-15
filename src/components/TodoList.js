import { useTodos } from "../useTodos";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
    const { todos } = useTodos()

    const renderTodoItem = (items) =>
        items.map((d) => (
            <TodoItem key={d.id} {...d} />
        ));

    const complete = renderTodoItem(todos.filter((d) => d.isComplete === false));
    const inComplete = renderTodoItem(todos.filter((d) => d.isComplete === true));

    return (
        <div>
            <h1 className="my-3">Todo List</h1>
            <TodoForm />
            {complete}
            <div className="py-3"></div>
            {inComplete}
        </div>
    );
}
export default TodoList;
