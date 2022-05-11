import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

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
  // let isAddClicked = false;
  // //Add task form
  // const handleAddForm = () => {
  //   isAddClicked = !isAddClicked;
  //   console.log("isAddClicked ", isAddClicked);
  // };

  //Add Task
  const addTask = (task) => {
    console.log(task);
    let id = Math.floor(Math.random() * 10000) + 1;
    setTasks([...tasks, { id, ...task }]);
  };

  //Delete Task
  const handleDeleteTask = (task) => {
    const { id } = task;
    setTasks(tasks.filter((task, index) => task.id !== id));
  };
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, reminder: !task.reminder };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="container">
      <Header handleAddForm={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        "No tasks to show!!!"
      )}
    </div>
  );
}

export default App;
