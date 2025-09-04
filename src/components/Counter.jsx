import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { Button, Spinner } from 'reactstrap';
import { Myimg } from './Myimg';
const Counter = () => {

    const [nr, setNr] = useState(0)
    const [loading, setLoading] = useState(true)
    const decrement = ()=>{
        setNr(nr-1)
        setLoading(true)

    }
    const increment=()=>{
        setNr(nr+1)
        setLoading(true)
    }
    return (
        <div>
            <div className='p-5 d-flex gap-2 justify-content-center'>
                <Button color="primary" onClick={() => decrement()} outline>
                    <CiCircleMinus />
                </Button>

                <Button color={nr >= 0 ? "primary" : "warning"} onClick={() => nr} outline>
                    {nr}
                </Button>

                <Button color="primary" onClick={() => increment()} outline>
                    <CiCirclePlus />
                </Button>
                {/*itt jelenjen meg egy kep aminek az indexét az nr adja meg */}

            </div>
            <div className='d-flex gap-2 mb-3 jusify-content-center'>
                {nr > 0 && <Myimg nr={nr} loading={loading} setLoading={setLoading}/>}
            </div>
        </div>
    )
}

export default Counter
