import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [ showAddTask, setShowAddTask ] = useState(false);
  const [ tasks, setTasks] = useState([]);

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// deleting a task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => (task.id !== id)))
}

// toggle function

const reminderToggle = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    )
  )
}

  return (
    <div className="container">
      <Header title={"Task Tracker App"} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminderToggle} /> : "No Task To Show"}
    </div>
  );
}

export default App;
