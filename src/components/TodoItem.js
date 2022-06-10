function TodoItem({ id, name, isComplete, onToggle, onDelete }) {
    console.log(id)
    return (
        <ul className="list-group ">
            <div className=" d-flex border align-items-center justify-content-between p-2 mx-5 list-box" >
                <div>
                    <li className={`${isComplete ? "text-decoration-line-through" : null}`} onClick={() => onToggle(id)}>
                        <input type={"checkbox"} className="mx-5" onChange={() => { }} checked={isComplete} />{name}
                    </li>
                </div>
                <span className="" onClick={() => onDelete(id)}>X</span>
            </div>
        </ul>



    )
}
export default TodoItem;