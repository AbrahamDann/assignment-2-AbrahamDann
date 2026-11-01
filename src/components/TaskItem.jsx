function TaskItem({task, onToggle, onRemove}) {
    return (<li>
                <label> 
                        <input type="checkbox" id={task.id} checked={task.completed} onChange={onToggle}/>
                        <span className={task.completed ? "completed" : ""}>{task.text}</span>
                </label>
                <button type="button" className="delete-btn" onClick={onRemove} aria-label="Delete task">Delete</button>
            </li>)
}

export default TaskItem;
