import React, { useState } from 'react'
import { FormGroup, Button, Input, Form, Label } from 'reactstrap'

export const NewToDo = ({handleAdd}) => {
    const [descr, setDescr] = useState("")

const handleSubmit = ()=>{
      handleAdd(descr)
      setDescr("")
}

  return (
    <div>
      <Form style={{display:"flex", gap:"5px", justifyContent:"center", alignItems:"center"}}>
  <FormGroup>
    <Label>
    </Label>
    <Input
    placeholder="New Item"
    type="text"
    value={descr}
    onChange={(e)=>setDescr(e.target.value)}
    />
    </FormGroup>
    <FormGroup style={{marginTop:"25px"}}>
      <Button onClick={handleSubmit} disabled={!descr}>Add</Button>
    </FormGroup>
    <FormGroup style={{marginTop:"25px"}}>
      
    </FormGroup>
    </Form>
    </div>
  )
}
