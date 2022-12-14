import React from 'react'
import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import {DeleteIcon} from '../TodoIcon/DeleteIcon';
import './TodoItem.css'


const TodoItem = (props) => {
  return (
    <li className='TodoItem'>
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
      >
        {props.text}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
    // <li className="TodoItem">
    //   <span 
    //     className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
    //     onClick={props.onComplete}
    //   >
    //     √
    //   </span>
    //   <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
    //     {props.text}
    //   </p>
    //   <span 
    //     className="Icon Icon-delete"
    //     onClick={props.onDelete}
    //   >
    //     X
    //   </span>
    // </li>
  )
}

export {TodoItem}
    // <li className="TodoItem">
    //   <span>C</span>
    //   <p>{props.text}</p>
    //   <span>X</span>
    // </li>