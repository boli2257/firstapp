import React from 'react'
import { FaTrash } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useState } from 'react';
import { todosData } from '../data'//adatbázisból jön az adat
import { ListGroup, ListGroupItem } from 'reactstrap'
import { NewToDo } from './NewToDo';
export const ToDo = () => {

  const [todos, setTodos] = useState(todosData)

  const handleDelete = (id) => {
    console.log(id);
    setTodos(prev => prev.filter(obj => obj.id != id))
  }
  const handleDone = (id) => {
    console.log("Handledone:" + id);
    setTodos(prev => prev.map(obj => obj.id==id ? {...obj,done:!obj.done, /*ujattributum:"teszt"*/} : obj))


  }
  return (
    <div style={{maxWidth:"600px", padding:"1 rem"}}>
      <NewToDo/>
      <ListGroup>
        {todos.map(obj =>
          <ListGroupItem className='d-flex justify-content-between' key={obj.id}>
            <span onClick={() => handleDone(obj.id)}><IoCheckmarkCircleSharp style={{ color: obj.done ? "green" : "gray", textDecoration: obj.done ? "line-through" : "none", fontSize: "2-rem" }} /></span>
            <div style={{ textDecoration: obj.done ? "line-through" : "none" }}>{obj.desc}</div>
            <span><FaTrash style={{ color: "red", fontSize: "2-rem" }} onClick={() => handleDelete(obj.id)} /></span>

          </ListGroupItem>
        )}
      </ListGroup>
    </div>
  )
}
export default ToDo
