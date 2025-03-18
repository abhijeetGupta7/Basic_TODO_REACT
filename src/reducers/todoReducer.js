function todoReducer(state, action) {
    if(action.type=='add_todo') {
        const todoText=action.payload.todoText;
        return [...state , {id: state.length+1, todoData:todoText, isFinished:false}]; 
    }
}

export default todoReducer;