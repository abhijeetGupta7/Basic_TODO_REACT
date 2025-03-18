import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import Todo_List from './components/Todo_List/Todo_List'
import ToDoContext from './context/ToDoContext'

function App() {

  const [list,setList]=useState([
    { id: 1, todoData: "todo 1", isFinished:false },
    { id: 2, todoData: "todo 2", isFinished:true }
    ]
  )

  return (
    <>  
        <ToDoContext.Provider value={[list,setList]}>
        <h1>Todo</h1>
        <AddTodo/>
        <Todo_List/>  
        </ToDoContext.Provider>
    </>
  )
}

export default App
