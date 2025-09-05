import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { RiEmotionHappyLine } from "react-icons/ri";
import { RiEmotionUnhappyLine } from "react-icons/ri";
const Toggle = () => {
  const [ishappy,setishappy] = useState(true)
  return (
    <div className=' d-flex justify-content-center '>
      <Button onClick={()=>setishappy(!ishappy)} outline>Are you happy?</Button>
      <div className='p-5 d-flex gap-2 justify-content-center'>
        {ishappy ?
        <RiEmotionHappyLine style={{fontSize:"3rem", backgroundColor:"greenyellow"}}/>:
        <RiEmotionUnhappyLine style={{fontSize:"3rem", backgroundColor:"gray"}}/>
      }
      </div>
    </div>
  )
}

export default Toggle
