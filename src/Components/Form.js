import React, {useState} from 'react'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

function Form() {
  const [input, setInput] = useState("");

  return (
    <div>
      <form>
      <FormControl className='form_container'>
        <InputLabel >Write a Task</InputLabel>
        <Input />
      </FormControl>
        <Button type="submit" variant="contained" color="primary">Add task</Button>
        {/* <button type="submit" onClick={addTask}>Add a task</button> */}
      </form>
    </div>
  )
}

export default Form
