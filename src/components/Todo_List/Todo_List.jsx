import { useContext } from "react";
import Todo from "../Todo/Todo";
import ToDoContext from "../../context/ToDoContext";

function Todo_List() {

    const [list,setList]=useContext(ToDoContext);

    function onFinished(finished,todo) {
        const updatedList = list.map((item) =>
            item.id === todo.id ? { ...item, isFinished:finished } : item
        );
        setList(updatedList);
    }

    function onDelete(todo) {
        const updatedList = list.filter( (item) => item.id!=todo.id );
        setList(updatedList);
    }

    function onEdit(editText,todo) {
        const updatedList = list.map( (item) => {
            if(item.id==todo.id) item.todoData=editText;
            return item;
        })
        setList(updatedList); 
    }

    return (
        <div>
            {list.length > 0 &&
                list.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        todo={todo.todoData}
                        isFinished={todo.isFinished}
                        changeFinished={(finished) => { onFinished(finished,todo) }}
                        onDelete={() => { onDelete(todo) } }
                        onEdit={ (editText) => { onEdit(editText,todo) } }
                    />
                ))}
        </div>
    );
}

export default Todo_List;
