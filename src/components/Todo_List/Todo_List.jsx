import { useContext } from "react";
import Todo from "../Todo/Todo";
import ToDoContext from "../../context/ToDoContext";

function Todo_List() {
    const { list, dispatch } = useContext(ToDoContext);

    function onFinished(finished, todo) {
        dispatch({ type: "change_finished", payload: { finished, todo } });
    }

    function onDelete(todo) {
        dispatch({ type: "delete_todo", payload: { todo } });
    }

    function onEdit(editText, todo) {
        dispatch({ type: "edit_todo", payload: { todo, todoData:editText } });
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
                        changeFinished={(finished) => onFinished(finished, todo)}
                        onDelete={() => onDelete(todo)}
                        onEdit={(editText) => onEdit(editText, todo)}
                    />
                ))}
        </div>
    );
}

export default Todo_List;
