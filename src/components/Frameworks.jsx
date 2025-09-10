import React, { useState } from 'react'
import { frontendFrameworks } from '../framework'
import { ListGroup, ListGroupItem } from 'reactstrap';

export const Frameworks = () => {
  const[frame, useFrame] = useState(frontendFrameworks)
  console.log(frame);
  
    return (
    <div>
      <ListGroup>
            {frame.map((obj,i)=><ListGroupItem style={{display:"flex",justifyContent:"center"}} key={i}>{obj}</ListGroupItem>)}
      </ListGroup>
    </div>
  )
}