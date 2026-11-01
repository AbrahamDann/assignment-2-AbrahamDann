import './App.css'
import TaskList from './components/TaskList'
import TaskCounter from './components/TaskCounter'
import TaskForm from './components/TaskForm'
import {useState} from 'react';
import menuIcon from './assets/menu_icon.png'
import searchIcon from './assets/search_icon.png'
import checkIcon from './assets/check_icon.png'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'
// Assignment 2: build the Task Manager here.
// Step 1 (after the Oct 12 class): hard-coded tasks, the five components, props.
// Step 2 (after the Oct 19 class): useState, the controlled form, toggle, delete, filtering.
function App() {
  const [tasks, setTasks] = useState([
    {id:1, text:"Call Mom", completed:false},
    {id:2, text:"Buy the new issue of Scientific American", completed:false},
    {id:3, text:"Return the textbook to Josie", completed:false},
    {id:4, text:"Buy the new album by Rake", completed:false},
    {id:5, text:"Buy a gift card for Dad", completed:false}
  ])
  const [filter, setFilter] = useState("all");
  function addTask(text){
    const newTask = {id: Date.now(), text:text, completed: false}
    setTasks([...tasks, newTask])
  }
  function removeTask(id){
    setTasks(tasks.filter(task=> task.id!==id));
  }
  function onToggle(id){
    setTasks(
      tasks.map(task=>{
        if (task.id === id){
          return {...task, completed: !task.completed}
        }
        return task;
      })
    )
  }
  const totalCount = tasks.length;
  const doneCount = tasks.filter(task => task.completed).length;
  const visibleTasks = tasks.filter(task => {
    if (filter == "all"){
      return true
    }
    if (filter == "completed"){
      return task.completed
    }
    if (filter =="active"){
      return !task.completed
    }
  })
  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <img src={menuIcon} alt="" />
          <img src={searchIcon} alt="" />
          <input type="text" placeholder="Quick find" />
        </div>
        <div className="header-right">
          <img src={checkIcon} alt="" />
          <TaskCounter total={totalCount} completed={doneCount}/>
        </div>
      </header>
      <div className="page-layout">
        <nav className="sidebar">
          <ul>
            <li><img src={inboxIcon} alt="" />Inbox <span className="task-count">{totalCount}</span></li>
            <li><img src={calendarIcon} alt="" />Today <span className="task-count">{totalCount}</span></li>
            <li><img src={upcomingIcon} alt="" />Upcoming</li>
          </ul>
        </nav>
        <main className="main-content">
          <h1>Inbox</h1>
          <div className="filters">
            <button type="button" className={filter === "all" ? "filter-btn active" : "filter-btn"} onClick={() => setFilter("all")}>All</button>
            <span className="filter-sep">|</span>
            <button type="button" className={filter === "active" ? "filter-btn active" : "filter-btn"} onClick={() => setFilter("active")}>Active</button>
            <span className="filter-sep">|</span>
            <button type="button" className={filter === "completed" ? "filter-btn active" : "filter-btn"} onClick={() => setFilter("completed")}>Completed</button>
          </div>
          {visibleTasks.length > 0
            ? <TaskList tasks={visibleTasks} onToggle={onToggle} onRemove={removeTask}/>
            : <p className="empty-state">Nothing to see here. Add a task below.</p>}
          <TaskForm onAdd={addTask}/>
        </main>
      </div>
    </div>
  )
}

export default App
