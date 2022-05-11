import { useState } from 'react';

const AddTask = ({addTask}) => {
    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    const [reminder,setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Pls enter text')
            return
        }

        addTask({text, day, reminder});

        setText('');
        setDay('');
        setReminder(false);
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="task">Task</label>
                <input 
                    type="text" 
                    id="task" placeholder="Add Task" 
                    value={text}
                    onChange={(e)=> setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="day">Day &amp; Time</label>
                <input type="text" id="day"
                    placeholder="Add Day &amp; Time" 
                    value={day}
                    onChange={(e)=> setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set Reminder</label>
                <input type="checkbox" id="reminder"
                    onChange={(e)=> setReminder(e.currentTarget.checked)} />
            </div>
            <input className="btn btn-block" type="submit" value="Save Task" />
        </form>
    )
}

export default AddTask