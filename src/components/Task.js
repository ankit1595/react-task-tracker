import { FaTimes } from "react-icons/fa";

const Task = ({ task, handleDeleteTask, reminder, toggleReminder }) => {

  return (
    <div className={`task ${reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
      <h3>
        {task.text}
        <FaTimes color="red" cursor='pointer' onClick={() => handleDeleteTask(task)}/>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
