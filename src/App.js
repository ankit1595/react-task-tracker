import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  //Delete Task
  const handleDeleteTask = (task) => {
    const { id } = task;
    setTasks(tasks.filter((task, index) => task.id !== id)) 
  }
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
      if(task.id === id){
        return {...task, reminder: !task.reminder}
      }
      else{
        return task
      }
    }));
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
      {tasks.length>0 ? 
      <Tasks 
        tasks={tasks} 
        handleDeleteTask={handleDeleteTask}
        toggleReminder={toggleReminder} 
        /> : 
      'No tasks to show!!!'}
    </div>
  );
}

export default App;
