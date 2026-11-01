import TaskItem from './TaskItem'

function TaskList({tasks, onToggle, onRemove}) {
  return (
    <ul className="task-list">
        {tasks.map(task => (<TaskItem key={task.id}
         onRemove={() => onRemove(task.id)} 
         task={task} 
         onToggle={() => onToggle(task.id)}/>))}
    </ul>
  );
}

export default TaskList