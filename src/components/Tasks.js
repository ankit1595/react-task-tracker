import Task from "./Task";

const Tasks = ({ tasks, handleDeleteTask, toggleReminder }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task 
            key={task.id} 
            task={task} 
            handleDeleteTask={handleDeleteTask}
            toggleReminder={toggleReminder}
            reminder={task.reminder}
        />
      ))}
    </div>
  );
};

export default Tasks;
