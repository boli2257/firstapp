import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { quotesFromDatabase } from '../quotes'

const RandomQuote = () => {
    const [quote, setQuote] = useState(quotesFromDatabase)
    console.log(quote);

    const selectedQuote = ()=>{
        const randomNum = Math.abs(Math.round(Math.random()*quotesFromDatabase.length)-1)
        console.log(randomNum);
        setQuote(quotesFromDatabase[randomNum])
    }

    

    return (
    <div className='d-flex align-items-center flex-column p-3'>
      <Button onClick={selectedQuote} style={{marginBottom:"10"}}>Idézet</Button>
      <br />
      <p>{quote}</p>
    </div>
  )
}

export default RandomQuote
