import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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

  return (
    <div className="container">
      <Header title={"Task Tracker App"} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
