import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [ tasks, setTasks] = useState([
    {
        id: 1,
        text: 'task of 1',
        day: "Monday",
        reminder: true,
    },
    {
        id: 2,
        text: "task of 2",
        day: "Tuesday",
        reminder: false,
    },
    {
        id: 3,
        text: "task of 3",
        day: "Friday",
        reminder: true,
    }
]);

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
      <Header title={"Task Tracker App"} />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminderToggle} /> : "No Task To Show"}
    </div>
  );
}

export default App;
