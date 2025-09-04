import { Button } from 'reactstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';
import { useState } from 'react';
import Toggle from './components/Toggle';
import ToDo from './components/ToDo';
function App() {
    const [selected, setSelected]= useState(" ")
  return (
    <>
      <div className='app'>
        <h1 style={{textAlign:"center"}}>First js app</h1>
        <div className='d-flex gap-2 mb-3 jusify-content-center'>
          <Button onClick={()=>setSelected('counter')} color="primary" outline={selected!='counter'}>
            Counter
          </Button>{' '}
          
          <Button outline={selected!='toggle'} onClick={()=>setSelected('toggle')}>
            Toggle
          </Button> {' '}
         
          <Button onClick={()=>setSelected('todo')} color="success" outline={selected!='todo'}>
            ToDo
          </Button>{' '}
          
        </div>
        {selected == "counter" && <Counter/>}
      {selected == "toggle" && <Toggle/>}
      {selected == "todo" && <ToDo/>}
      </div>
      
    </>
  )
}

export default App
