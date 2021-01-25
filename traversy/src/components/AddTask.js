
import {useState} from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onChange = (e) => {
        setText(e.target.value);
    }
   
    const changeReminder = e => {
        setReminder(e.currentTarget.checked)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(!text) {
            alert('Please add task')
        }
        if(!day) {
            alert('Please add day and time')
        }
        onAdd({text,day, reminder})
        setText('')
        setDay('')
        setReminder(false)

    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <input type="text"
                placeholder="Add Task"
                value={text} onChange={onChange}
                />
            </div>
            <div className="form-control">
                <input type="text"
                placeholder="Add day/mounth"
                value={day} onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
             {text.length > 0 && day.length > 0 ? <input className="save-task" type="submit" value="Save Task" /> : 'Print information'}
             </div>
        </form>
    )
}


export default AddTask
