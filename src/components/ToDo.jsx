  import React from 'react'
import { FaTrash } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useState } from 'react';
import { todosData } from '../data'//adatbázisból jön az adat
import { ListGroup, ListGroupItem } from 'reactstrap'
import { NewToDo } from './NewToDo';
import { FaRegTrashCan } from "react-icons/fa6";
import { TodoSummary } from './todoSummary';
export const ToDo = () => {

  const [todos, setTodos] = useState(todosData)
const handleDeleteAll = ()=>{
      setTodos([])
    }
  const handleDelete = (id) => {
    console.log(id);
    setTodos(prev => prev.filter(obj => obj.id != id))
  }
  const handleDone = (id) => {
    console.log("Handledone:" + id);
    setTodos(prev => prev.map(obj => obj.id==id ? {...obj,done:!obj.done, /*ujattributum:"teszt"*/} : obj))
  }

  const handleAdd = (desc)=>{
    const newTodo={
      id: Date.now(),
      desc,
      done:false
    }
    setTodos(prev=>[...prev,newTodo])
  }
  return (
    <div style={{maxWidth:"600px", padding:"1rem", margin:"0 auto"}}>
      <NewToDo handleAdd={handleAdd}/>
      <FaRegTrashCan onClick={handleDeleteAll} style={{color:"red", fontSize:"2rem",border:"solid 2px red",borderRadius:"7px", padding:"2px"}}/>
      <ListGroup> 
        {todos.map(obj =>
          <ListGroupItem className='d-flex justify-content-between' key={obj.id}>
            <span onClick={() => handleDone(obj.id)}><IoCheckmarkCircleSharp style={{ color: obj.done ? "green" : "gray", textDecoration: obj.done ? "line-through" : "none", fontSize: "2-rem" }} /></span>
            <div style={{ textDecoration: obj.done ? "line-through" : "none" }}>{obj.desc}</div>
            <span><FaTrash style={{ color: "red", fontSize: "2-rem" }} onClick={() => handleDelete(obj.id)} /></span>

          </ListGroupItem>
        )}
      </ListGroup>
      <TodoSummary todos={todos}/>
    </div>
  )
}
export default ToDo
