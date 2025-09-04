import React from 'react'
import { useState } from 'react';
import { Spinner } from 'reactstrap';

export const Myimg = ({nr, loading, setLoading})=> {
    const url =`https://picsum.photos/id/${nr}/400`
    console.log(url);
    

  return (
    <div className='d-flex jusify-content-center'>
        {loading && 
                <Spinner>
                    Loading...
                </Spinner>
                }
      <img src={url} alt="" className='img-fluid rounded thumbnail' onLoad={()=>setLoading(false)} onError={()=> setLoading(false)} style={{display: loading ? "none" : "block"}}/>
    </div>
  )
}
