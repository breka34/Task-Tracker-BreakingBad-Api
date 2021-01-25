import  { useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
//breakingBad
import BreakingApi from './BreakingBad/BreakingApi';
import axios from 'axios';
import './BreakingBad/breaking.css';
import Search from './BreakingBad/Search'
function App() {
  const [show, setShow] = useState(false)
  const [tasks,setTasks] = useState([
    {
        id: 3,
        text: 'Watch series',
        day: 'Wend/Apr',
        reminder: false
},
{
    id: 2,
    text: 'Make training',
    day: 'Mon/Jun',
    reminder: false
},
{
    id: 1,
    text: 'Practice redux',
    day: 'Thu/Dec',
    reminder: true
},
])
//fetch

const [items, setItems] = useState([]);
const [search, setSearch] = useState('');

useEffect(() => {
    const fetchItems = async () => {
        const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${search}`)
        setItems(result.data)
        console.log(result.data);
    }
    fetchItems();
},[search])


//delete

const deleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id))
}
const addTask = (task) => {
const id =  Math.floor(Math.random() * 10000) +1;
const newTask = {id, ...task}
setTasks([...tasks, newTask])

}
  return (
    <main>
    <div className="container">
     <Header onAdd={() => setShow(!show)} 
     showAdd={show}
     title="Task Tracker" />
     {show  && <AddTask onAdd={addTask} />}
     {tasks.length > 0 ? <Tasks tasks={tasks} 
     onDelete={deleteTask} /> : <h5>'No tasks for show'</h5>}
     </div>
     <div className="breaking-bad-container">
     <Search getQuery={(q) => setSearch(q)} />
     <BreakingApi  items={items} />
     </div>
    </main>
  );
}

export default App;
