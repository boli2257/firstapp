import React, { useState } from 'react'
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix} from "react-icons/fa";
import { Button } from 'reactstrap';   
import { randNr } from '../utils';
export const Dice = () => {
    const[diceNumber, setDiceNumber] = useState(1)
    const dices=[
        <FaDiceOne size={100}/>,
        <FaDiceTwo size={100}/>,
        <FaDiceThree size={100}/>,
        <FaDiceFour size={100}/>,
        <FaDiceFive size={100}/>,
        <FaDiceSix size={100}/>
    ]
    console.log(randNr(1,6));
    
  return (
    <div>
      <h1>Dice Roller</h1>
      <div>{dices[randNr(1,6)]}</div>
      <Button onClick={()=>setDiceNumber(randNr(1,6))}>Roll the dice</Button>
    </div>
  )
}