import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const handleDeleteTask = (task) => {
    const { id } = task;
    setTasks(tasks.filter((task, index) => {
      return(task.id !== id)
    }))
    
  }
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Interview schedule",
      day: "May 12th at 04:00pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Go to Sanket Wedding",
      day: "Jun 01st at 09:00am",
      reminder: true,
    },
    {
      id: 3,
      text: "Make matrimony profile",
      day: "May 18th at 04:00pm",
      reminder: true,
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
