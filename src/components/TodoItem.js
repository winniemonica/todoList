function TodoItem({ id, name, isComplete, onToggle, onDelete }) {
    return (
        <ul className="list-group">
            <li className={`list-group-item ${isComplete ? "text-decoration-line-through" : null}`} onClick={() => onToggle(id)}><input type={"checkbox"} checked={isComplete} />{name}</li>
            <span onClick={() => onDelete(id)}>X</span>
        </ul>

    )
}
export default TodoItem;