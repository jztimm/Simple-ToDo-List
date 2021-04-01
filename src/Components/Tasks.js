import React, {useState} from 'react'

function Tasks() {
  const [tasks, setTasks] = useState(["Test Task 1", "Test Task 2"]);

  return (
    <div>
      {tasks.map(task => (
        <li>{task}</li>
      ))}
    </div>
  )
}

export default Tasks
