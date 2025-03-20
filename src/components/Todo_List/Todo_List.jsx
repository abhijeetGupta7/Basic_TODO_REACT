import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

function Todo_List( {edit_todo, change_finished, delete_todo} ) {
    
    const list=useSelector( (state) => state.todo  );

    function onFinished(finished, todo) {
        change_finished( {finished:finished,todo:todo} );
    }

    function onDelete(todo) {
        delete_todo({todo:todo});
    }

    function onEdit(editText, todo) {
        edit_todo({todoText:editText,todo:todo});
    }

    return (
        <div>
            {list.length > 0 &&
                list.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        todo={todo.todoText} 
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
