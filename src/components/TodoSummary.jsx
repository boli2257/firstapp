import React from 'react'
export const TodoSummary = ({todos}) => {
    const hossz = todos.length
    const keszhossz = todos.filter(obj=>obj.done)
    console.log(hossz, keszhossz.length);
    
  return (
    <div>
      <p>Összes tennivaló:{hossz}. Kész tennivaló {keszhossz.length}.</p>
    </div>
  )
}