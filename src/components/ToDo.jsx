import React from 'react'
import { FaTrash } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useState } from 'react';
import { todosData } from '../data'
import { ListGroup, ListGroupItem } from 'reactstrap'
export const ToDo = () => {

  const [todos, setTodos] = useState(todosData)
  console.log(todos);

  const handleDelete = (id)=>{
    console.log(id);
    setTodos(prev=>prev.filter(obj=>obj.id!=id))
  }

  return (
    <div>
      <ListGroup>
        {todos.map(obj =>
          <ListGroupItem className='d-flex justify-content-between' key={obj.id}><IoCheckmarkCircleSharp style={{color:obj.done ?"green" : "gray",textDecoration:obj.done ? "line-through" : "none", fontSize:"2-rem"}}/>
          <div style={{textDecoration:obj.done ? "line-through" : "none"}}>{obj.desc}</div>
            
            <FaTrash style={{color:"red", fontSize:"2-rem"}} onClick={()=> handleDelete(obj.id)}/>
          </ListGroupItem>
        )}
      </ListGroup>
    </div>
  )
}
export default ToDo
