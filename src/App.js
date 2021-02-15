import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState ([
    {
      id: 1,
      text: "Doctor",
      day: "Feb 5 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Study",
      day: "Feb 6 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Sleep",
      day: "Feb 7 2:30pm",
      reminder: false,
    },
  ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  return (
    <div className="container">
      <Header />      
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> :
        ("No Tasks to show") }
    </div>
  );
}

export default App;
