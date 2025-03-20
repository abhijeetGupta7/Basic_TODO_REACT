import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

function Todo_List( {edit_todo, changeFinished, delete_todo} ) {
    
    const list=useSelector( (state) => state.todo  );

    function onFinished(finished, todo) {
        changeFinished(finished,todo);
    }

    function onDelete(todo) {
        delete_todo(todo);
    }

    function onEdit(editText, todo) {
        edit_todo(editText,todo);
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
