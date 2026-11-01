import {useState} from 'react';
function TaskForm({onAdd}) {
    const [text, setText] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        if(text.trim() == '') return;
        onAdd(text)
        setText('');
    }
    return (<form className="task-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Add a task" value={text} onChange={event => setText(event.target.value)}/>
                        <button type="submit">Add Task</button>
    </form>)
}

export default TaskForm;
