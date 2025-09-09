import React, { useState } from 'react'

import { FormGroup, Button, Input, Form, Label } from 'reactstrap'

export const NewToDo = () => {
    const [descr, setDescr] = useState("")
  return (
    <div className='d-flex justify-content-between'>
      <Form style={{display:"flex", gap:"5px"}}>
  <FormGroup>
    <Label>
    </Label>
    <Input
    placeholder="New Item"
    type="text"
    value={descr}
    onChange={(e)=>setDescr(e.target.value)}
    />
    <Button onClick={handleSubmit}></Button>
    </FormGroup>
    </Form>
    </div>
  )
}
