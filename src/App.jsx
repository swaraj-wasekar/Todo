import './style.css'
import { useState } from 'react'


export default function App(){

  const [newitem,setNewitem] = useState("")
  const [todos,settodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault()

    settodos(currenttodos=>{
      return [...currenttodos, {id: crypto.randomUUID(),title: newitem, completed:false}]
    })

    setNewitem("")
    
  }

  function toggletodo(id,completed){
    settodos(currenttodos=>{
      return currenttodos.map(todo=>{
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo

      })
    })
  }

  function deletetodo(id){
    settodos(currenttodos=>{
      return currenttodos.filter(todo=>
        todo.id !==id
      )
    })
  }
  
  return <>
   <form onSubmit={handleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label htmlFor="item">New Item</label>
        <input value={newitem} onChange={e => setNewitem(e.target.value)} type="text" id='item'/>
      </div>
      <button className='btn'>Add</button>
  </form>
  <h1 className='header'>Todo List</h1>
  <ul className='list'>

    {todos.map(todo=> {
      return <li key={todo.id}> 
      <label>
        <input type="checkbox" checked={todo.completed}  onChange={e=>toggletodo(todo.id, e.target.checked)} />
         {todo.title}
      </label>
      <button className='btn btn-danger' onClick={()=>deletetodo(todo.id)}>Delete</button>
    </li>
    })}

  </ul>
  </>
 
}
