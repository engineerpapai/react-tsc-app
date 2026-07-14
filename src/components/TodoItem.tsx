import React from 'react'

const TodoItem: React.FC<{text: string; onDelete: () => void}> = (props) => {
  return (
    <li>{props.text}&nbsp;<button onClick={props.onDelete}>Delete</button></li>
  )
}

export default TodoItem