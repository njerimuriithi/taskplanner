import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
const App=()=>{
  const [showAddTask, setShowAddTask]=useState(true)
  const [tasks,setTasks ] = useState(
    [
        {
            id:1,
            text:'Doctors Appointment',
            day:'Feb 5th at 2:30pm',
            reminder:true,
        },
        {
            id:2,
            text:'Gynaes Appointment',
            day:'Feb 7th at 2:30pm',
            reminder:true,
        }
    ]
    ) 
    const deleteTask =(id)=>{
      setTasks(tasks.filter((task)=> task.id !==
      id))

    }
    const addTask=(task)=>{
      const id =Math.floor(Math.random()*
      1000)+1
      const newTask ={id,...task}
      setTasks([...tasks,newTask])

    }
 
  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask
        (!showAddTask)}
        showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ?<Tasks tasks={tasks}
       onDelete={deleteTask}/>:'No tasks to Show'}
    </div>
  );

  }
export default App;
