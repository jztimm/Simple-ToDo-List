import React, {useState} from 'react'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Task from './Task'

function Form() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value)
  }

  const addTask = (event) => {
    event.preventDefault()
    setTasks([...tasks, input])
  }

  return (
    <div>
      <form>
      <FormControl className='form_container'>
        <InputLabel >Write a Task</InputLabel>
        <Input value={input} onChange={changeHandler}/>
      </FormControl>
        <Button type="submit" variant="contained" color="primary" onClick={addTask}>Add task</Button>
        {/* <button type="submit" onClick={addTask}>Add a task</button> */}
      </form>
      <p>
        {tasks.map(task => (
          <p>
            <Task text={task}/>
          </p>
        ))}
      </p>
    </div>
  )
}

export default Form
