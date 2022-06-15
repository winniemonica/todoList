import { useTodos } from "../useTodos";

function TodoItem({ id, name, isComplete }) {
    const { toggleTodo, deleteTodo } = useTodos()
    return (
        <ul className="list-group ">
            <div className=" d-flex border align-items-center justify-content-between p-2 mx-5 list-box">
                <div>
                    <li
                        className={`${isComplete ? "text-decoration-line-through" : null}`}
                        onClick={() => toggleTodo(id)}
                    >
                        <input
                            type={"checkbox"}
                            className="mx-5"
                            onChange={() => { }}
                            checked={isComplete}
                        />
                        {name}
                    </li>
                </div>
                <span className="" onClick={() => deleteTodo(id)}>
                    X
                </span>
            </div>
        </ul>
    );
}
export default TodoItem;
