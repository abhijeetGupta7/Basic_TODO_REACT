import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import Todo_List from './components/Todo_List/Todo_List'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add_todo, change_finished, delete_todo, edit_todo } from './actions/todoActions'

function App() {

  const dispatch=useDispatch();
  const action=bindActionCreators({add_todo,delete_todo,edit_todo,change_finished}, dispatch);

  return (
    <>  
          <h1>Todo</h1>
          <AddTodo add_todo={action.add_todo}/>
          <Todo_List change_finished={action.change_finished} delete_todo={action.delete_todo} edit_todo={action.edit_todo}/>  
    </>
  )
}

export default App
