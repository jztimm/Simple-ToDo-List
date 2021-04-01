import React, {useState} from 'react'
import '../Styles/Tasks.css'

function Tasks() {
  const [tasks, setTasks] = useState(["Test Task 1", "Test Task 2"]);

  return (
    <div className="tasks_list">
      {tasks.map(task => (
        <h3>{task}</h3>
      ))}
    </div>
  )
}

export default Tasks
