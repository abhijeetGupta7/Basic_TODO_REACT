// here state corresponds to the list

function todoReducer(state=[], action) {
    if(action.type=='add_todo') {
        const todoData=action.payload?.todoData;
        return [...state , {id: Date.now(), todoData:todoData, isFinished:false}]; 
    }
    else if(action.type=='delete_todo') {
        const todo=action.payload?.todo;
        const updatedList = state.filter( (item) => item.id!=todo.id );
        return updatedList;
    }
    else if(action.type=='change_finished') {
        const finished=action.payload?.finished;
        const todo=action.payload?.todo;
        const updatedList = state.map((item) =>
            item.id === todo.id ? { ...item, isFinished:finished } : item
        );
        return updatedList;
    }
    else if(action.type=='edit_todo') {
        const editText=action.payload?.todoData;
        const todo=action.payload?.todo;
        const updatedList = state.map( (item) => {
            if(item.id==todo.id) item.todoData=editText;
            return item;
        })
        return updatedList;
    }
    return state;

}

export default todoReducer;