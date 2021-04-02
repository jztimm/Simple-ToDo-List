import React from 'react'
import {List, ListItem, ListItemText, Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import '../Styles/Task.css'

function Task(props) {

  return (
    <div>
      <List className="task_list">
        <ListItem button>
          <ListItemText primary={props.text} />
        </ListItem>
        <Button variant="text" color="default" ><DeleteIcon/> Delete Me</Button>
      </List>
    </div>
  )
}

export default Task