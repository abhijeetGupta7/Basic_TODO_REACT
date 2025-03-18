import { useReducer } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import Todo_List from './components/Todo_List/Todo_List'
import ToDoContext from './context/ToDoContext'
import todoReducer from './reducers/todoReducer'

function App() {

  const [list,dispatch]=useReducer(todoReducer,[]);

  return (
    <>  
        <ToDoContext.Provider value={{list,dispatch}}>
        <h1>Todo</h1>
        <AddTodo/>
        <Todo_List/>  
        </ToDoContext.Provider>
    </>
  )
}

export default App
