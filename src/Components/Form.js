import React, {useState} from 'react'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import '../Styles/Tasks.css'

function Form() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(["Test Task 1", "Test Task 2"]);

  const changeHandler = (event) => {
    setInput(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setTasks(...tasks, input)
  }

  return (
    <div>
      <form>
      <FormControl className='form_container'>
        <InputLabel >Write a Task</InputLabel>
        <Input value={input} onChange={changeHandler}/>
      </FormControl>
        <Button type="submit" variant="contained" color="primary" onClick={submitHandler}>Add task</Button>
        {/* <button type="submit" onClick={addTask}>Add a task</button> */}
      </form>
      <div className="tasks_list">
        {tasks.map(task => (
          <h3>{task}</h3>
        ))}
      </div>
    </div>
  )
}

export default Form
