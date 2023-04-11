// rafc
import React from 'react'
import {TodoItem} from "./TodoItem"  //we can give access to same folder like that
export const Todos = (props) => {
  let mystyle={
    minHeight:"70vh",
    margin:"45px auto"
  }
  return (
    <div className='container ' style={mystyle}>
    <h3 className=' my-3'>Todos List</h3>

    {/* This is a simply loop run for printing all less or equal to three items */}
    
    {props.todos.length === 0?"No todos to display":
    props.todos.map((todo)=>{
        return ( <TodoItem todo={todo}  key={todo.sno} onDelete={props.onDelete}/> )
      })
      }

    </div>
  )
}

